import React, { Component } from 'react'
// import { Row, Col, Container } from 'react-bootstrap'
// import './services.css'
import appdevelopment from '../images/services/appDevelopment.jpg'
import webdevelopment from '../images/services/webDevelopment.jpg'
import uiuxDesigning from '../images/services/uiuxDesigning.jpg'
import solutiondesigning from '../images/services/solutionDesigning.jpg'
import cloudcomputing from '../images/services/cloudComputing.jpg'
import ServicesDiv2Props from './ServicesDiv2Props'

const rows = [
{
    columns:[
        {
            title: 'App Development',
            description: 'Custom mobile app solutions to clients looking to enhance their business through technology. Our team of expert developers and designers work closely with clients to understand their needs and create high-quality, user-friendly apps that bring their vision to life. Utilizing the latest technologies and design trends, we deliver secure and scalable apps that meet clients\' unique requirements and drive business success.',
            image: appdevelopment,
            alt_img : 'App-Development' 
        }
    ]
},
{
    columns:[
        {
           title: 'Web Development',
           description: ' Creates custom web solutions that meet clients\' unique requirements. Our team of experienced developers and designers deliver user-friendly and visually appealing web applications optimized for performance and scalability. Committed to providing high-quality services, on-time and within budget.' ,
            image: webdevelopment
        },
    ]
},
{
    columns:[
        {
           title: 'Ui/Ux Designing',
           description: 'Focus on improving the user experience and the visual design of software products. The services combine research, design, and technology to create user-friendly and visually appealing software that meets customer needs and expectations.' ,
            image: uiuxDesigning,
        }
    ]
},
{
    columns:[
        {
           title: 'Solution Designing',
           description: 'To help clients develop and implement effective technology solutions for their specific business needs. These services include identifying problems, gathering requirements, creating functional specifications, and designing custom software solutions.' ,
            image: solutiondesigning,
        }
    ]
},
{
    columns:[
        {
           title: 'Cloud Computing',
           description: 'To help organizations move their IT infrastructure and applications to the cloud. Cloud migration, cloud management, and cloud security, to help clients take advantage of the benefits of cloud computing, such as increased scalability, cost savings, and enhanced security' ,
            image: cloudcomputing,
        }
    ]
},
];

export default class ServicesDiv2 extends Component{
    render(){
        return(
            <div>
                <ServicesDiv2Props rows = {rows}/>
            </div>
        )
    }
}