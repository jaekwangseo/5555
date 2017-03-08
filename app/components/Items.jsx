// Items component to render the list of items taken from the props, which is linked to the state by the ItemsComponent

import React from 'react';
import { Link } from 'react-router';
//import EditItem from './EditItem.jsx';

export default function Items(props) {

//need <span className=glyphicon></span> for spacing. Used to be there for the stars, but couldnt implement that well.

  return (

<div className="container">

  <div className="row">

    <div className="col-md-3">
      <p className="lead">FILTER</p>
      <div className="list-group">
        <a href="#" className="list-group-item">HOW THIS FILTER WORKS IS</a>
        <a href="#" className="list-group-item">IT WOULD JUST LINK</a>
        <a href="#" className="list-group-item">TO PAGES WITH ITEMS ONLY OF CLICKED CATEGORY...</a>

        <div>
          <form className="review col-md-offset-5" onSubmit={props.handleFilterEvent}>
            <div className="form-group col-md-3">
              <label htmlFor="category">Filter by Category</label> <br />
              <input type="radio" name="category" value="Javascript" />  1
              <select name="category">
               {props.categories.map(category => (
               <option key={category.id} value={category.name}>{category.name}</option>
                ))}
             </select>
            </div>
            <br />
            <button type="submit" className="btn btn-info" >Submit</button>
          </form>
          <ul className="list-group">
            {
            props.itemList && props.itemList.map( (item) => {
            return (
              <li key={item.id} className="list-group-item col-md-6 col-md-offset-3">
              <img src={`http://${item.url}`}></img>
              <Link to={`/item/${item.id}`} >
                <h3 className="list-group-item-">{item.title}</h3>
              </Link>
              <div className="list-group-item-text">
                {item.description}
              </div>

              <div className="container button-wrapper">
                <button className="btn-lg btn-success col-md-offset-3" onClick={(event) => {event.preventDefault(); props.addItemToCart(item.id);}}>Add <span className="glyphicon glyphicon-shopping-cart"></span></button>
              </div>

              {props.user && props.user.admin ?
                <div>
                  <button className='btn btn-danger' onClick={() => props.handleDeleteEvent(item.id)} >
                  Delete Item
                  </button>

                  <Link to={`/item/${item.id}/edit`} >
                  <button type="submit" className="btn btn-success col-md-2 col-md-offset-5"> Edit Item </button>
                  </Link>

                  <button className='btn btn-warning' onClick={() => props.setStatusToInactive(item.id)} >
                  Set Inactive
                  </button>
                </div>


<div className="col-md-9">

<div className="row carousel-holder">

<div className="col-md-12">
<div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
<ol className="carousel-indicators">
<li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
<li data-target="#carousel-example-generic" data-slide-to="1"></li>
<li data-target="#carousel-example-generic" data-slide-to="2"></li>
</ol>
<div className="carousel-inner">
<div className="item active">
<img className="slide-image" src="http://www.hradigital.com/images/skills/js.jpg" alt="" />
</div>
<div className="item">
<img className="slide-image" src="http://www.genesiswebstudio.com/wp-content/uploads/2014/09/technologies.png" alt="" />
</div>
<div className="item">
<img className="slide-image" src="http://www.edugeek.net/attachments/forums/general-chat/14982d1345731949-microsoft-has-new-logo-mylogo.png" alt="" />
</div>
</div>
<a className="left carousel-control" href="#carousel-example-generic" data-slide="prev">
<span className="glyphicon glyphicon-chevron-left"></span>
</a>
<a className="right carousel-control" href="#carousel-example-generic" data-slide="next">
<span className="glyphicon glyphicon-chevron-right"></span>
</a>
</div>
</div>

</div>

<hr />
<div className="row">

{  props.itemList && props.itemList.map( (item) => {
return (
<div key={item.id} className="col-sm-4 col-lg-4 col-md-4">
<div className="thumbnail">
<img src={`http://${item.url}`} alt="" />
<div className="caption">
<h4 className="pull-right">${item.price}</h4>
<Link to={`/item/${item.id}`} >
  <h4 >{item.title}</h4>
</Link>
<p>{item.description}</p>
<div className="ratings">
<p className="pull-left">User Rating: {item.seller.rating}</p>
</div>
<p>
<span className="glyphicon"></span>
</p>
<div >
<button className="btn-lg btn-success" onClick={(event) => {event.preventDefault(); props.addItemToCart(item.id);}}>Add <span className="glyphicon glyphicon-shopping-cart"></span></button>
</div>
{props.user && props.user.admin ?
<div>
<button className='btn btn-danger' onClick={() => props.handleDeleteEvent(item.id)} >
  Delete Item
</button>
<Link to={`/item/${item.id}/edit`} >
  <button type="submit" className="btn btn-success"> Edit Item </button>
</Link>
</div>
: null
}
</div>
</div>
</div>
);
})
}


</div>

</div>



<div className="container">

<hr />

<footer>
<div className="row">
<div className="col-lg-12">
<p>Copyright &copy; rent-a-dev 2017</p>
</div>
</div>
</footer>

</div>





);
}

