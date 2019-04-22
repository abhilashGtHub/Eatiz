import * as React from 'react'
import Footer from '../components/Footer'
import Link from 'next/link';
import BoxBorderedButton from '../components/BoxBorderedButton';

const style = {
    header: {
        paddingTop: '30px',
        width: '100%',
        height: "140px",
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        alignSelf: 'center',
        position: 'relative',
        backgroundColor:'#000'
    },
    logo: {
        backgroundImage: "url('/static/images/eatiz-shape.png')",
        width: '200px',
        height: '67px',
        backgroundSize: 'cover',
        alignSelf: 'flex-start'
    },
    linkStyle: {
        paddingLeft: "30px",
        paddingRight: "30px",
        paddingTop: "10px",
        paddingBottom: "10px"
    }
}

export default function TermsAndConditions(props){
        return (
            <div>
                <div style={style.header}>
                        <a title="Eatiz.org" style={style.logo} />
                    <div
                        style={{
                            alignSelf: 'flex-end',
                            //Remove Width
                            // width: '40%',
                            height: '100%'
                        }}>
                        <ul style={{
                            display: 'flex',
                            listStyle: 'none',
                            justifyContent: 'space-between',
                            width: '100%',
                            paddingLeft: 0,
                        }}
                            className="responsiveNav"
                            id="resonsiveNav"
                        >
                                <a title="Help" className="navElems">
                                    <li style={style.linkStyle}>Search</li></a>
                                <Link href="/partner">
                                    <a title="Partner" className="navElems">
                                        <li style={style.linkStyle}>Partner</li></a>
                                </Link>
                                <Link href="/help" >
                                    <a title="Help" className="navElems">
                                        <li style={style.linkStyle}>Help</li></a>
                                </Link>
                                <Link href="/about" >
                                    <a title="About" className="navElems" >
                                        <li style={style.linkStyle}>About</li></a>
                                </Link>
                                <Link href="/singin"  >
                                <a title="Singin" className="navElems">
                                    <li><BoxBorderedButton text="Sign In" /></li>
                                </a>
                            </Link>
                            
                        </ul>
                    </div>
                </div>
                <div>
                    <div class="row">
                        <div class="col-md-3">
                        <br/>
                        <ul>
                                <li>Terms and Conditions</li>
                                <li>Privacy Policy</li>
                                <li>Eatiz of Business</li>
                                <li>About</li>
                                <li>Safety and Security</li>
                            </ul>
                        </div>
                        <div class="col-md-9"><h3>Terms and Conditions</h3>
                            <br/>
                            The Privacy Statement was last updated on January 2, 2019.
                            <br/><br/>
                            <p>Eatiz may colect personal information to help you place and receive delivery orders and to improve the Eatiz service. This privacy statement explains hos Eatiz, Inc.("Eatiz, "we","us","or","our") hanldes 
                                your information when you visit or use www.eatiz.org(the "Site").the Eatiz mobile application. any other website or mobile
                                application that links to the Privacy Statement(Collectively, the "Services").
                            </p>
                            <br/>
                            <p>Your access to and/or use of Third Party Websites, including providing information, materials and/or other content to such Third Party Websites, is entirely at your own risk. Eatiz reserves the right to discontinue links to any Third Party Websites at any time and for any reason, without notice</p>
                            <br />
                            <h5><b>Collection of Information</b></h5>
                            <br />
                            <p>When you use our services we may collect or receive information about you.</p>
                            <p>Eatiz will have the right to market any and all Promos to Diners in Eatizs sole discretion, including, without limitation, in relation to the frequency, prominence, location (e.g. brand channels) and duration that Eatiz advertises such Promos. Eatiz may permit Restaurant to select certain Promo terms and conditions (e.g. percentage or dollar amount off, duration of the Promo, etc.). In addition to those Restaurant-selected terms and conditions, Eatiz may set additional terms and conditions in its sole discretion. Once opted into the Promo through Eatiz, Restaurant may not subsequently make changes to the Promo terms and conditions, and Eatiz is authorized to continue offering the Promo in accordance with such terms and conditions.</p>
							  <p>Restaurant assumes full responsibility for fulfillment of all orders subject to Promos and will indemnify, hold harmless and defend Eatiz from and against any claims, demands, actions, suits, damages, liabilities, losses, settlements, judgments, costs and expenses (including, without limitation, reasonable attorneys fees) arising from its acts or omissions in connection with any such Promo.</p>
							  <br/>
							  <p class="b">For Charities Only</p>
							  <p>Donor organization such as Food Banks, Charities etc. acknowledges and agrees that Eatiz will not be involved in the logistics of transporting food from the Donor to Charities, nor in the preparation, packaging or serving of food or any other operations of the Donor or the Charities. Eatiz does not take responsibility for any private arrangements or agreements made between the Donors and the relevant Charities.</p>
                              <p>This Agreement constitutes the entire agreement between the Donor and Eatiz and supersedes and extinguishes all previous agreements, promises, assurances, warranties, representations and understandings between them, whether written or oral, relating to its subject matter. The Donor and Eatiz agree that they shall have no remedies in respect of any statement, representation, assurance or warranty (whether made innocently or negligently) that is not set out in this Agreement. For charities and community groups, and businesses who wants to use food donation platform, there is no charge for use of Eatiz platform. We might eventually charge for using Eatiz platform subject to change but we try our best to keep this platform free for social enterprises such as Food Banks, Charities etc.</p>
							  <br/>
							  <p class="b">Violations Of The Agreement</p>
							  <p>Eatiz reserves the right to seek all remedies available at law and in equity for violations of the Agreement, including, without limitation, the right to block access from a particular Internet or IP address to Eatiz for Restaurants.</p>
							  <br/>
							  <p class="b">Changes To The Agreement</p>
							  <p>We may change this Agreement from time to time and without prior notice. If we make a change to this Agreement it will be effective as soon as we post it, and the most current version of this Agreement will always be posted. If we make a material change to the Agreement, we will notify you. You agree that you will review this Agreement periodically. By continuing to access and/or use Eatiz for Restaurants and/or any Device provided to you after we make changes to this Agreement, you agree to be bound by the revised Agreement. You agree that if you do not agree to the new terms of the Agreement, you will stop accessing and using Eatiz for Restaurants and any Device provided to you.</p>

                        </div>
                    </div>
                </div>
      
                <Footer/>
            </div>
        );
    }

