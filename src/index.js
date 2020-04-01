// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';


//  Create a react component
const App = () => {
    return (
        <div className='ui container comments'> 
            <ApprovalCard>
                <CommentDetail 
                    author='Sam' 
                    timeAgo='Todat at 5:00 pm'
                    content='Wazzuuuup'
                    avatar={faker.image.avatar()}
                />    
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                    author='Alex' 
                    timeAgo='Todat at 6:00 pm'
                    content='Nice blog post'
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            
        </div>
    );
};
 
// Take the react component and show it on the screen 
ReactDOM.render(
    <App />,
    document.querySelector('#root')
); 