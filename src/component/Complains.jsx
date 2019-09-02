import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//common
import ListGroup from '../common/ListGroup';
import Search from '../common/Search';
import MediaObject from '../common/MediaObject';
import Pagination from '../common/Pagination';
import Spinners from '../common/Spinners';
//services
import { complains } from '../services/complainServices';
import { deleteComplain, resolveComplain } from '../services/complainServices';
//data
import { complainCategory } from '../data/room_data';
//utils
import { paginate } from '../utils/paginate';

export default class Complains extends Component {
  state = {
    selectedComplain: '',
    complains: '',
    complainCategory: [],
    pageSize: 7,
    page: 1,
    foundBySearch: ''
  };

  async componentDidMount() {
    try {
      const complain = await complains();
      this.setState({
        complains: [...complain],
        complainCategory: [{ name: 'All Complaint' }, ...complainCategory]
      });
    } catch (err) {
      this.setState({
        complains: []
      });
    }
  }

  getPageData = () => {
    const { complains, selectedComplain } = this.state;
    const filteredcomplains = selectedComplain.id
      ? complains.filter(
          complain => complain.complain_category === selectedComplain.name
        )
      : complains;
    return filteredcomplains;
  };

  searching = () => {
    const { foundBySearch, complains } = this.state;

    if (
      Array.isArray(foundBySearch) &&
      foundBySearch.length < complains.length
    ) {
      return { totalComplains: foundBySearch.length, data: foundBySearch };
    } else {
      const filteredcomplains = this.getPageData();
      return {
        totalComplains: filteredcomplains.length,
        data: filteredcomplains
      };
    }
  };

  handleDelete = async id => {
    const complains = [...this.state.complains];
    const newComplains = complains.filter(complain => complain._id !== id);
    this.setState({ complains: [...newComplains] });

    try {
      await deleteComplain(id);
    } catch (err) {
      if (
        err.response &&
        (err.response.status === 400 || err.response.status === 404)
      )
        alert(err.response.data);
      this.setState({ complains });
    }
  };

  handleResolve = async id => {
    const complains = [...this.state.complains];
    const complain = complains.find(c => c._id === id);
    complain.is_resolved
      ? (complain.is_resolved = false)
      : (complain.is_resolved = true);

    try {
      await resolveComplain(id);
      this.setState({ complains: [...complains] });
    } catch (err) {
      if (
        err.response &&
        (err.response.status >= 400 || err.response.status < 500)
      )
        alert(err.response.data);

      this.setState(prevState => {
        return { ...prevState };
      });
    }
  };

  handlePageChange = page => {
    this.setState({ page: page });
  };

  handleSelect = selectedComplain => {
    this.setState({ page: 1, selectedComplain });
  };

  handleSearch = ({ target }) => {
    let regex = new RegExp('^' + target.value, 'i');
    let complains = this.state.complains.filter(complain =>
      regex.test(complain.title) ? complain : undefined
    );
    this.setState({
      page: 1,
      foundBySearch: complains.length > 0 ? [...complains] : ''
    });
  };

  render() {
    const {
      complains,
      complainCategory,
      selectedComplain,
      page,
      pageSize
    } = this.state;
    const { totalComplains, data } = this.searching();
    const { user } = this.props;

    //paginate
    const paginatedComplains = paginate(data, page, pageSize);

    return complains ? (
      <div className='row mt-5'>
        <div className='col-sm-4 col-12'>
          <ListGroup
            items={complainCategory}
            selectedItem={selectedComplain}
            onItemSelect={this.handleSelect}
          />
        </div>
        <div className='col-sm-8 col-12'>
          {user && !user.isAdmin && (
            <Link className='btn-primary btn mb-2' to='/complain/new'>
              New Complaint
            </Link>
          )}
          <p>There are {totalComplains} complain(s) </p>

          <Search onSearch={this.handleSearch} />
          <MediaObject
            items={paginatedComplains}
            onDelete={this.handleDelete}
            imgStyle={style}
            user={user}
            onResolve={this.handleResolve}
          />

          <Pagination
            totalItems={totalComplains}
            currentPage={page}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    ) : (
      <Spinners />
    );
  }
}

const style = {
  height: 70 + 'px',
  borderRadius: 50
};
