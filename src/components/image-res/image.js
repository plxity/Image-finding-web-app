import React from 'react';
import  _ from 'lodash';
import {connect} from 'react-redux';

 class Image extends React.Component{



    renderImg(){
        return _.map(this.props.img.hits,post=>{
            return(

                <li key={post.id}>
                finally done! please hoja!
                
                </li>
            );
        });
        
     }
    render(){
        return(

            <div>
               <ul >
            {this.renderImg()}
            
            </ul>
            </div>
        );

    }
}



function mapStateToProps(state){
    return {
        img :state.img
    };
}
export default connect(mapStateToProps)(Image);