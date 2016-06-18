var React=require('react');
var ReactDOM=require('react-dom');
var Router=require('react-router').Router;
var IndexRoute=require('react-router').IndexRoute;
var Route=require('react-router').Route;
var browserHistory=require('react-router').browserHistory;
var Link=require('react-router').Link;


var Reflux=require('reflux');
var Actions=require('../actions/actions');
var Store=require('../store/stores');

var NavigationBar=React.createClass({
  render:function()
  {return(
    <nav className="navbar navbar-default navbar-inverse navbar-fixed-top" role="navigation">
				<div className="navbar-header">

					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
						 <span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
					</button> <a className="navbar-brand" href="#">Brand</a>
				</div>

				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul className="nav navbar-nav">
        		<li className="active">
							<Link to="/home" >Home</Link>
						</li>
						<li>
							<Link to="/addarticle">Add Article</Link>
						</li>
            
						<li className="dropdown">
							 <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown<strong className="caret"></strong></a>
							<ul className="dropdown-menu">
								<li>
									<a href="#">Action</a>
								</li>
								<li>
									<a href="#">Another action</a>
								</li>
								<li>
									<a href="#">Something else here</a>
								</li>
								<li className="divider">
								</li>
								<li>
									<a href="#">Separated link</a>
								</li>
								<li className="divider">
								</li>
								<li>
									<a href="#">One more separated link</a>
								</li>
							</ul>
						</li>
					</ul>
					<form className="navbar-form navbar-left" role="search">
						<div className="form-group">
							<input type="text" className="form-control"/>
						</div>
						<button type="submit" className="btn btn-default">
							Submit
						</button>
					</form>
					<ul className="nav navbar-nav navbar-right">
						<li>
							<a href="#">Link</a>
						</li>
						<li className="dropdown">
							 <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown<strong className="caret"></strong></a>
							<ul className="dropdown-menu">
								<li>
									<a href="#">Action</a>
								</li>
								<li>
									<a href="#">Another action</a>
								</li>
								<li>
									<a href="#">Something else here</a>
								</li>
								<li className="divider">
								</li>
								<li>
									<a href="#">Separated link</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>

			</nav>
    );
  }
});

var MainLayout=React.createClass({
  render:function()
  {
    return(
    <div className="container" id="main">
      <NavigationBar />
      <main>
        {this.props.children}
      </main>
    </div>
  );
  }
});

var Home=React.createClass({
  render:function(){
    return(
      <div className="blog-body">
      <div className="container col-12"  >
      <div className="row">
  <div className="col-md-3 fixed">
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">
          Panel title
        </h3>
      </div>
      <div className="panel-body">
        Panel content
      </div>
      <div className="panel-footer">
        Panel footer
      </div>
    </div>
  </div>
  <div className="col-md-7">
  <div className="jumbotron">
    <h3>
      h3. Lorem ipsum dolor sit amet.
    </h3><img alt="Bootstrap Image Preview" src="http://lorempixel.com/140/140/"/>
    <p>
      Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Aliquam eget sapien sapien. Curabitur in metus urna. In hac habitasse platea dictumst. Phasellus eu sem sapien, sed vestibulum velit. Nam purus nibh, lacinia non faucibus et, pharetra in dolor. Sed iaculis posuere diam ut cursus. <em>Morbi commodo sodales nisi id sodales. Proin consectetur, nisi id commodo imperdiet, metus nunc consequat lectus, id bibendum diam velit et dui.</em> Proin massa magna, vulputate nec bibendum nec, posuere nec lacus. <small>Aliquam mi erat, aliquam vel luctus eu, pharetra quis elit. Nulla euismod ultrices massa, et feugiat ipsum consequat eu.</small>
    </p>
  </div>
    <br/>
  <div className="jumbotron">
    <h3>
      h3. Lorem ipsum dolor sit amet.
    </h3><img alt="Bootstrap Image Preview" src="http://lorempixel.com/140/140/"/>
    <p>
      Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Aliquam eget sapien sapien. Curabitur in metus urna. In hac habitasse platea dictumst. Phasellus eu sem sapien, sed vestibulum velit. Nam purus nibh, lacinia non faucibus et, pharetra in dolor. Sed iaculis posuere diam ut cursus. <em>Morbi commodo sodales nisi id sodales. Proin consectetur, nisi id commodo imperdiet, metus nunc consequat lectus, id bibendum diam velit et dui.</em> Proin massa magna, vulputate nec bibendum nec, posuere nec lacus. <small>Aliquam mi erat, aliquam vel luctus eu, pharetra quis elit. Nulla euismod ultrices massa, et feugiat ipsum consequat eu.</small>
    </p>
  </div>
  </div>

  <div className="col-md-2">
  </div>
</div>
</div>
</div>
    )
  }
});

var AddArticle=React.createClass({
  getInitialState: function(){
    return {

      data:{}

    }
  },
  saveArticle:function(){
    alert('--saveArticle--');

    var articleForm=$('#saveArticleForm').serialize();
    Actions.saveArticleAction(articleForm);
    this.clearForm();
  },
  clearForm:function(){
    this.state.data.title="";
    this.state.data.image="";
    this.state.data.description="";
  },
  render:function(){
    return(
<center>
<div className="container-fluid blog-body">
	<div className="row">
  <div className="col-md-3">
  </div>
		<div className="col-md-6">
			<div className="list-group">
				 <a href="#" className="list-group-item active">Add Article</a>
			</div>
       <form  id="saveArticleForm">
      <div className={'form-group row'}>
          <label for="title" className={'col-sm-4 form-control-label'}>Title</label>
            <div className={'col-sm-6 title'}>
               <input type="text" className={'form-control input-tag'} name="title" defaultValue={this.state.data.title} required="required"/>
            </div>
      </div>
      <div className={'form-group row'}>
          <label for="title" className={'col-sm-4 form-control-label'}>Image </label>
            <div className={'col-sm-6 title'}>
               <input type="text" className={'form-control input-tag'} name="image" defaultValue={this.state.data.image} required="required"/>
            </div>
      </div>
      <div className={'form-group row'}>
          <label for="title" className={'col-sm-4 form-control-label'}>Descrption </label>
            <div className={'col-sm-6 title'} cols={'50'} rows={'10'}>
               <textarea type="text" className={'form-control input-tag'} name="description" defaultValue={this.state.data.description} required="required"/>
            </div>
      </div>
      <div className={'form-group row'}>
    <button type="button" onClick={this.saveArticle} className={'btn btn-info text-center'}>Add</button>
     </div>
      </form>
		</div>
	</div>
</div>
</center>
)
  }
});

ReactDOM.render(
  (
    <Router history={browserHistory}>

    <Route path="/" component={MainLayout}>
       <IndexRoute component={Home} />
       <Route path="/home" component={Home} />
       <Route path="/addarticle" component={AddArticle} />
      </Route>
    </Router>
),document.getElementById('content'));
