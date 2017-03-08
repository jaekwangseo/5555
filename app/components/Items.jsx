import React from 'react';
import { Link } from 'react-router';
//import EditItem from './EditItem.jsx';

export default function Items(props) {
  console.log(props);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">

         <form className="review" onSubmit={props.handleFilterEvent}>
              <div className="form-group">
                <label htmlFor="category">Filter by Category</label> <br />
                <input type="radio" name="category" value="Javascript" />
                <select name="category">
                  {props.categories.map(category => (
                    <option key={category.id} value={category.name}>{category.name}</option>
                    ))}
                </select>
              </div>
              <br />
              <button type="submit" className="btn btn-info" >Submit</button>
          </form>

          <Link to={'createItem'} >
            <button> Add Item </button>
          </Link>
        </div>
        <div className="col-md-9">
          <div className="row">

            <div className="col-sm-9 col-lg-9 col-md-9">

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
              {
                props.itemList && props.itemList.map( (item) => {
                return (
                  <div key={item.id} className="thumbnail">
                    <img src={`http://${item.url}`} alt="" />
                    <div className="caption">

                        <p>{item.description}</p>
                        <div className="pull-right">
                        <h4>$24.99</h4>
                        <button className="btn-sm btn-success" onClick={(event) => {event.preventDefault(); props.addItemToCart(item.id);}}>Add <span className="glyphicon glyphicon-shopping-cart"></span></button>
                           {props.user && props.user.admin ?
                            <div>
                              <button className='btn-sm btn-danger' onClick={() => props.handleDeleteEvent(item.id)} >
                                Delete Item
                              </button>
                              <Link to={`/item/${item.id}/edit`} >
                                <button type="submit" className="btn-sm btn-success"> Edit Item </button>
                              </Link>
                              <button className='btn-sm btn-warning' onClick={() => props.setStatusToInactive(item.id)} >
                                Set Inactive
                              </button>
                            </div>
                            : null
                          }
                        </div>
                        <h4><Link to={`/item/${item.id}`} >{item.title}</Link></h4>


                    </div>

                  <div className="ratings">
                                        <p className="pull-left">User Rating: {item.seller.rating}</p>
                                      </div>
                                      <p>
                                        <span className="glyphicon"></span>
                                      </p>
                  </div>
                );
                })}
            </div>


          </div>
        </div> {/* col-md-9 ends */}
      </div> {/*// row ends*/}
    </div> //container ends
  );
}
