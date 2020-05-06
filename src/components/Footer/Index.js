import React, { Component } from 'react';
import './Footer.scss';
import Images from '../../containers/Images/Image';
import { Col, Button, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt ,faFacebookSquare} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }


    render() {
        return (
            <div className='Footer-container'>
                <Container> 
                    <Row>
                        <Col  sm={4}>
                        <img className='rentDaap-Img'  src={Images.path.rentingdapp} alt='rent' />
                        <div className='social-links'>
                             <img className='social-Img'  src={Images.path.facebook} alt='fb' />
                             <img className='social-Img'  src={Images.path.instagram} alt='inst' />
                             <img className='social-Img'  src={Images.path.twitter} alt='twitter' />
                             <img className='social-Img'  src={Images.path.youtube} alt='yt' />
                        </div>
                        </Col>
                        <Col  sm={3}>
                                <div className='rentDaap-help'>
                                       <ul>
                                       <h5  className='footer-link'> Link</h5>
                                        <li><a href="/pdf/ListingPolicyRentingDAp.pdf"  target='_blank' >Listing Policy of <br/>renting Dapp</a></li>
                                        <li><a href="">About Eraswap Life</a></li>
                                        <li><a href="">Code of Conduct</a></li>
                                        </ul>
                                        <ul>
                                        <h5 className='other-footer-txt'>Other Links</h5>
                                        <li><a href="">Whitepaper</a></li>
                                        <li><a href="">Contact Us</a></li>
                                        <li><a href="/pdf/Renting Dapp Terms & Service.pdf">Terms & Condition</a></li>
                                        <li><a href='/pdf/Renting Dapp Privacy.pdf'
                                             target='_blank' >Privacy policy</a></li>
                                        </ul>
                                    </div>
                        </Col>
                        <Col  sm={5}>
                            <div className='subscribe-container'>
                                <div className='subscribe-detail'>Subscribe to Our News Letter</div>
                                <form>
                                    <input
                                        placeholder='Your email address'
                                        className='subscribe-field'
                                        onChange={this.handleInputChange}
                                    />
                                </form>
                                <div className='subscribe-btn-container'>
                                    <button className='subscribe-rent-btn'>
                                       Subscribe
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}




export default Footer;