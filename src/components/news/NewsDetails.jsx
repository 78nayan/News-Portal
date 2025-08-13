import React from 'react';

const NewsDetails = (props) => {
    return (
        <div>
            <div className="container">
                <h4 className="my-3">{props.details['title']}</h4>
                <hr className="" />
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <img className="w-100 img-thumbnail" src={props.details['img1']} />
                        <p className=''>{(props.details['long_des'])}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;