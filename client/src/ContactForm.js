import React from "react";
import axios from 'axios';
import "react-responsive-modal/lib/react-responsive-modal.css";
import Modal from "react-responsive-modal/lib/css";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      name: '',
      "company-name": '',
      phone: '',
      "web-address": '',
      _replyto: '',
      'business-description': '',
      _gotcha: '',
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  openModal() {
    this.setState({ open: true });
  }
  closeModal() {
    this.setState({ open: false });
  }
  handleSubmit(e) {
    e.preventDefault()
    let data = {...this.state}
    delete data.open
    axios({
      url:'https://formspree.io/debbie@dslottdesign.com',
      // url:'/api/hello',
      method: 'post',
      data: data,
      config:{headers: { 'Content-Type': "application/json"}},
    }).then(this.closeModal).catch(console.error.bind(console))

  }

  handleChange(e){
    this.setState({[e.target.name]:e.target.value});
  }

  render() {
      const { open } = this.state;
    //   <h4>What type of services are you interested in?
    //   (Please check all 
    //   that apply)</h4>
    //   <input type="checkbox" name="services" />
    //   <p type=Direct Mail />
    //   <br />
    //   <input type="checkbox" name="services" />
    //   <strong>Print Ads/Mailers</strong>
    //   <br />
    //   <input
    //     name="services"
    //     type="checkbox"
    //     value="Brochures/Newsletters"
    //   />
    //   <strong>Brochures/Newsletters </strong>
    //   <br />
    //   <input name="services" type="checkbox" value="Catalog" />
    //   <strong>Catalog </strong>
    //   <br />
    //   <input type="checkbox" name="services" />
    //   <strong>Corporate Display/Signage</strong>
    //   <br />
    //   <input type="checkbox" name="services" />
    //   <strong>Corporate Identity/Logo Design</strong> <br />
    //   <input name="services" type="checkbox" value="Book Jackets" />
    //   <strong>Book Jackets </strong>
    //   <br />
    //   <input name="services" type="checkbox" value="Editorial" />
    //   <strong>Editorial</strong>
    //   <br />
    //   <input
    //     name="services"
    //     type="checkbox"
    //     value="Product Design"
    //   />
    //   <strong>Product Design</strong>
    //   <br />
    //   <input
    //     name="services"
    //     type="checkbox"
    //     value="Web Design"
    //   />
    //   <strong>Web Design</strong>
    //   <br />
    //   <input
    //     name="services"
    //     type="checkbox"
    //     value="Web Banners"
    //   />
    //   <strong>Web Banners</strong>
    //   <br />
    //   <input
    //     name="services"
    //     type="checkbox"
    //     value="HTML Email"
    //   />
    //   <strong>HTML Email</strong>
    //   <br />
    // <form className="form" action='https://formspree.io/debbie@dslottdesign.com' method='POST' >
    return (
      <div>
        <a onClick={this.openModal}>Contact</a>
        <Modal open={open} onClose={this.closeModal}>
        <form className="form" onSubmit={this.handleSubmit} >
            <h2>Contact</h2>
            <p type='Name' />
            <input type="text" name="name" placeholder="Your name" required onChange={this.handleChange}/>
            <br />
            <p type='Company Name' />
            <input onChange={this.handleChange} type="text" name="company-name" />
            <br />
            <p type='Phone' />
            <input onChange={this.handleChange} type="tel" name="phone" />
            <br />
            <p type='Web Address' />
            <input onChange={this.handleChange} type="url" name="web-address" />
            <br />
            <p type='Email' />
            <input onChange={this.handleChange} type="email" name="_replyto" />
            <br />
            <p type="Describe your business and what you're looking for." />
            <textarea 
            onChange={this.handleChange}
            name="business-description"
            />
            <br />            
            <input onChange={this.handleChange} style={{display: 'none'}} type='text' name='_gotcha'/>
            <button type='submit' >submit</button>
            <div>
            <span className='fa fa-phone' /> (516) 524-2592
            <span className='fa fa-envelope-o' /> 
            <a href="mailto:dslottdesign@yahoo.com" >dslottdesign@yahoo.com</a>         
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}
