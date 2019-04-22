import * as React from 'react'
import Link from 'next/link';
/*import { Link } from 'react-router-dom'
import * as bootstrap from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col' 
import { Router, Route, browserHistory } from 'react-router'
import AppLayout from '../components/AppLayout'
import CircularBorderedButton from '../components/CircularBorderedButton' */



export default function Footer(props) {
    const style = {
        footer: {
            left: 0,
            bottom: 0,
            backgroundColor: '#000',
            color: '#fff',
            border: '1px,solid,#000'
        },
        borderBlack: {
            border: '3px solid #000'
        },
        margin0:{
            marginBottom:'0px'
        },
        paddingLeft:{
            paddingLeft:'10px'
        },
        padding:{
            padding:'0px'
        }
    }
    return (
        
            <div>
                <link rel="stylesheet" href=" https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"></link>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"></link>
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
                <div style={style.footer}>
                    <div class="container">
                        <table class="table" style={style.margin0}>
                            <thead style={style.borderBlack}>
                                <tr style={style.borderBlack}>
                                    <th scope="col">Language</th>
                                    <th scope="col">Currency</th>
                                    <th scope="col">Eatiz</th>
                                    <th scope="col">Discover</th>
                                    <th scope="col">Our Information</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={style.borderBlack}>
                                    <td style={style.padding}>English</td>
                                    <td style={style.padding}>CAD $</td>
                                    <td style={style.padding}>About us</td>
                                    <td style={style.padding}>Be a Restaurant Partner</td>
                                    <Link href="/TermsAndConditions" >
                                    <td style={style.padding}>
                                    <a title="Terms and conditions">
                                    </a>Terms and Conditions
                                    </td>
                                    </Link>
                                </tr>
                                <tr style={style.borderBlack}>
                                    <td style={style.padding}></td>
                                    <td style={style.padding}></td>
                                    <td style={style.padding}>Careers</td>
                                    <td style={style.padding}>Be a Charity Partner</td>
                                    <td style={style.padding}>privacy policy</td>
                                </tr>
                                <tr style={style.borderBlack}>
                                    <td style={style.padding}></td>
                                    <td style={style.padding}></td>
                                    <td style={style.padding}>Press & Media</td>
                                    <td style={style.padding}>Help and Support</td>
                                    <td style={style.padding}>Community Guidelines</td>
                                </tr>
                                <tr style={style.borderBlack}>
                                    <td style={style.padding}></td>
                                    <td style={style.padding}></td>
                                    <td style={style.padding}>Community</td>
                                    <td style={style.padding}></td>
                                    <td style={style.padding}>Safety and Security</td>
                                </tr>
                                <tr style={style.borderBlack}>
                                    <td style={style.padding}><b>Download The App</b></td>
                                    <td style={style.padding}></td>
                                    <td style={style.padding}>Blog</td>
                                    <td style={style.padding}></td>
                                    <td style={style.padding}>Site Map</td>
                                </tr>
                                <tr style={style.borderBlack}>
                                <td><a  href="https://itunes.apple.com/us/app/keynote/id361285480?mt=8" class="fab fa-2x fa-apple"></a>&nbsp;&nbsp;&nbsp;Download on<br/>APP Store</td>
                                    <td style={style.padding}><a  href="https://play.google.com/store?hl=en" class="fab fa-2x fa-google-play"></a>&nbsp;&nbsp;&nbsp;Download on<br/>Google Play</td>
                                    <td style={style.padding}>Help</td>
                                    <td style={style.padding}></td>
                                    <td style={style.padding}></td>
                                </tr>
                                <tr style={style.borderBlack}>
                                    <td style={style.padding}></td>
                                    <td style={style.padding}></td>
                                    <td style={style.padding}></td>
                                    <td style={style.padding}></td>
                                    <td><a href="https://twitter.com/eatizapp" class="fab fa-twitter"></a>&nbsp;<a  style={style.paddingLeft} href="https://www.facebook.com/theeatizapp/?ref=settings" class="fab fa-facebook-f"></a>
                                    &nbsp;<a style={style.paddingLeft} href="https://www.instagram.com/eatizapp/" class="fab fa-instagram"></a>&nbsp;<a style={style.paddingLeft} href="https://www.linkedin.com/company/eatiz-let-s-food-share/" class="fab fa-linkedin"></a>
                                    &nbsp;<a style={style.paddingLeft} href="https://spectrum.chat/users/eatizapp?tab=posts" class="fab fa-google-plus-g"></a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


    )
}
