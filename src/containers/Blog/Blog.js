import React, { Component, Suspense } from 'react';
// import axios from 'axios';
import { Route, NavLink , Switch,Redirect} from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
const NewPost =  React.lazy(() => import('./NewPost/NewPost'));

class Blog extends Component {
    state = {
        auth: true
    }
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts"
                                exact
                                activeClassName="my-active"
                                activeStyle={{color:"green"}}
                            >Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
                <Switch>
                    {this.state.auth ?
                        <Route path="/new-post"
                        render={()=>(
                            <Suspense fallback={<div>Loading....</div>}>
                                <NewPost/>
                            </Suspense>
                        )}
                    /> : null}
                    <Route path="/posts" component={Posts} />
                    {/*404 not found case*/}
                    {/*<Route render={()=><h1>not Found</h1>}/>*/}
                    <Redirect from='/' to='/posts' />
                </Switch>
            </div>
        );
    }
}

export default Blog;
