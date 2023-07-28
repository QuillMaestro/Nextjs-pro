import React from 'react';
import '@/app/styles/footer.css'

const Footer = () => {
    return (
        <>
            {/* <!-- Footer Start --> */}
            <div class="footer wow fadeIn" data-wow-delay="0.3s">
                <div class="container-fluid">
                    <div class="container">
                        <div class="footer-info">
                            <h2>NextPro</h2>
                            <h3>123 Street, New York, USA</h3>
                            <div class="footer-menu">
                                <p>+012 345 67890</p>
                                <p>info@example.com</p>
                            </div>
                            <div class="footer-social">
                                <a href=""><i class="fab fa-twitter"></i></a>
                                <a href=""><i class="fab fa-facebook-f"></i></a>
                                <a href=""><i class="fab fa-youtube"></i></a>
                                <a href=""><i class="fab fa-instagram"></i></a>
                                <a href=""><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="container copyright">
                        <p>&copy; <a href="#">Your Site Name</a>, All Right Reserved
                        </p>
                    </div>
                </div>
            </div>
            {/* <!-- Footer End --> */}
        </>
    );
};

export default Footer;