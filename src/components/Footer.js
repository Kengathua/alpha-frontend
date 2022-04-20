import React from 'react'
import '../static/css/footer.css';


const Footer = () => {
	return (
		<section class="footer-section" id="footer">
			<div class="">
				<div class="container">
					<div class="footer-display">
						<div class="latest-tweets">
							<h6 class="latest-tweet-label">Latest Tweets</h6>
							<div class="latest-tweet-item">
								<div>
									<a href="#" class=""><i class="fa fa-twitter"></i></a>
								</div>
								<div class="latest-tweet-details">
									<p class="">@AbsaKenya
									can trace its history in kenya back in 1916 Where it became the first commercial bank to offer its shares to the public</p>
									<a class="tweet-sender" href="https://twitter.com/maudhuihouse/status/1230002981812232192">
										James Ndegwa - CEO </a>
									<small>Nov 10 2021</small>
								</div>
							</div>
							<div class="latest-tweet-item">
								<div>
									<a href="#" class=""><i class="fa fa-twitter"></i></a>
								</div>
								<div class="latest-tweet-details">
									<p class="">Through the Equity Group Foundation financial literacy programme, we train people on how to budget and how to manage
									money/capita</p>
									<a class="tweet-sender" href="https://twitter.com/BMW/status/1442142135654830086"> Anthony Kiogora - Associate Director
									</a>
									<small>about 13 hours ago</small>
								</div>
							</div>
						</div>
						<div class="home-extensions">
							<div class="extension-item">
								<h6 class="extension-label">Latest Tweets</h6>
								<ul class="">
									<li><a class="extension-element" href="https://www.absa.co.za/media-centre/"><i
												class="extension-icon fa fa-angle-right pr-2"></i> ABSA</a></li>
									<li><a class="extension-element" href="https://equitygroupholdings.com/newsroom/"><i
												class="extension-icon fa fa-angle-right pr-2"></i> EQTY</a></li>
									<li><a class="extension-element" href="https://www.co-opbank.co.ke/investor-relations/press-releases"><i
												class="extension-icon fa fa-angle-right pr-2"></i> COOP</a></li>
									<li><a class="extension-element" href="https://www.nationalbank.co.ke/about-us/newsroom"><i
												class="extension-icon fa fa-angle-right pr-2"></i> NBK</a></li>
									<li><a class="extension-element" href="https://ke.ncbagroup.com/news-and-insights/"><i
												class="extension-icon fa fa-angle-right pr-2"></i> NCBA</a></li>
									<li><a class="extension-element" href="https://ke.kcbgroup.com/about-us/news-room"><i
												class="extension-icon fa fa-angle-right pr-2"></i> KCB</a></li>
								</ul>
							</div>
							<div class="extension-item">
								<h6 class="extension-label">Overview</h6>
								<ul class="">
									<li><a class="extension-element" href="#"><i
												class="extension-icon fa fa-angle-right pr-2"></i> About Us</a></li>
									<li><a class="extension-element" href="#"><i
												class="extension-icon fa fa-angle-right pr-2"></i> Feedback</a></li>
									<li><a class="extension-element" href="#"><i
												class="extension-icon fa fa-angle-right pr-2"></i> Advertise with us</a>
									</li>
									<li><a class="extension-element" href="#"><i
												class="extension-icon fa fa-angle-right pr-2"></i> Contact Us</a></li>
									<li><a class="extension-element" href="#"><i
												class="extension-icon fa fa-angle-right pr-2"></i> FAQs</a></li>
									<li><a class="extension-element" href="#"><i
												class="extension-icon fa fa-angle-right pr-2"></i> Sitemap</a></li>
								</ul>
							</div>
							<div class="extension-item">
								<h6 class="extension-label">Other Pages</h6>
								<ul class="">
									<li><a class="extension-element" href="#"><i
												class="extension-icon fa fa-angle-right pr-2"></i> Careers</a></li>
									<li><a class="extension-element" href="#"><i
												class="extension-icon fa fa-angle-right pr-2"></i> Customer Care</a></li>
									<li><a class="extension-element" href="#"><i
												class="extension-icon fa fa-angle-right pr-2"></i> Privacy Policy</a></li>
									<li><a class="extension-element" href="#"><i
												class="extension-icon fa fa-angle-right pr-2"></i> Terms & Conditions</a>
									</li>
									<li><a class="extension-element" href="#"><i
												class="extension-icon fa fa-angle-right pr-2"></i> Sitemapa </a></li>
								</ul>
							</div>
						</div>
						<div class="contacts-area">
							<h6 class="contact-label">Contact Info</h6>
							<p>Intelligence to pick the best stocks and optimize your portfolio.</p>
							<ul class="">
								<li><a href="#"><i class="fa fa-map-marker pr-2"></i> Nairobi, Kenya</a></li>
								<li><a href="tel:+254718488252"><i class="fa fa-phone pr-2"></i> +254718488252</a></li>
								<li><a href="mailto:alphaexpert@gmail.com"><i class="fa fa-envelope pr-2"></i>
										support@alphaexperts.com</a></li>
								<li><a href="#"><i class="fa fa-fax pr-2"></i> Terms & Conditions</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- End Footer Top--> */}
			{/* <!-- Footer Bottom --> */}
			<div class="footer-bottom">
				<div class="footer-bottom-display">
					<div class="">
						<span class="copyright">Copyright &copy; 2017-2018 Powered By <a href="#">evehicles.</a> All Rights
							Reserved.</span>
					</div>
					<div class="social-items">
						<ul class="social-list">
							<li class="social-item"><a href="#"><i class="fa fa-facebook pr-3"></i></a></li>
							<li class="social-item"><a href="#"><i class="fa fa-twitter pr-3"></i></a></li>
							<li class="social-item"><a href="#"><i class="fa fa-linkedin pr-3"></i></a></li>
							<li class="social-item"><a href="#"><i class="fa fa-youtube-play pr-3"></i></a></li>
							<li class="social-item"><a href="#"><i class="fa fa-pinterest-p pr-3"></i></a></li>
							<li class="social-item"><a href="#"><i class="fa fa-instagram"></i></a></li>
						</ul>
					</div>
				</div>
			</div>
			{/* <!-- End Footer Bottom -->  */}
		</section>
	)
}

export default Footer
