import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showLearnMore, setShowLearnMore] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderActive(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsNavOpen(false);
  };

  const handleBooking = () => {
    alert('Booking feature coming soon!');
  };

  const destinations = [
    { id: 1, image: './assets/images/destination-1.jpg', city: 'Malé', country: 'Maldives', className: 'w-50' },
    { id: 2, image: './assets/images/Thailand.png', city: 'Bangkok', country: 'Thailand', className: 'w-50' },
    { id: 3, image: './assets/images/destination-3.jpg', city: 'Kuala Lumpur', country: 'Malaysia' },
    { id: 4, image: './assets/images/nepal.png', city: 'Kathmandu', country: 'Nepal' },
    { id: 5, image: './assets/images/destination-5.jpg', city: 'Jakarta', country: 'Indonesia' }
  ];

  const tours = [
    { id: 1, image: './assets/images/popular-1.jpg', title: 'A good traveler has no fixed plans and is not intent on arriving.', location: 'Kuala Lumpur, Malaysia', price: 'From $50.00', rating: 4 },
    { id: 2, image: './assets/images/popular-2.jpg', title: 'Adventure awaits those who seek the unknown paths.', location: 'Bangkok, Thailand', price: 'From $75.00', rating: 5 },
    { id: 3, image: './assets/images/popular-3.jpg', title: 'Discover hidden gems in exotic destinations.', location: 'Bali, Indonesia', price: 'From $65.00', rating: 4 },
    { id: 4, image: './assets/images/popular-4.jpg', title: 'Experience the culture and beauty of ancient cities.', location: 'Kathmandu, Nepal', price: 'From $45.00', rating: 4 },
    { id: 5, image: './assets/images/popular-5.jpg', title: 'Tropical paradise with crystal clear waters.', location: 'Maldives', price: 'From $120.00', rating: 5 },
    { id: 6, image: './assets/images/destination-1.jpg', title: 'Island hopping adventure in pristine waters.', location: 'Maldives', price: 'From $95.00', rating: 5 }
  ];

  const blogs = [
    { id: 1, image: './assets/images/popular-1.jpg', title: 'A good traveler has no fixed plans and is not intent on arriving.', author: 'Jony bristow', date: '04 Dec', time: '10:30 AM', content: 'Travel is more than just visiting places; it\'s about embracing the unknown and finding joy in spontaneous moments. When we let go of rigid itineraries, we open ourselves to authentic experiences that transform us.' },
    { id: 2, image: './assets/images/blog-2.jpg', title: 'Top 10 hidden gems for adventure seekers worldwide.', author: 'Sarah Johnson', date: '05 Dec', time: '2:15 PM', content: 'Discover breathtaking locations off the beaten path. From secret waterfalls in Costa Rica to hidden temples in Cambodia, these destinations offer unforgettable adventures for the bold traveler.' },
    { id: 3, image: './assets/images/blog-3.jpg', title: 'Budget travel tips for exploring Asia on a shoestring.', author: 'Mike Chen', date: '06 Dec', time: '9:45 AM', content: 'Traveling through Asia doesn\'t have to break the bank. Learn how to find affordable accommodations, eat like a local, and use public transportation to stretch your budget while having amazing experiences.' },
    { id: 4, image: './assets/images/destination-2.jpg', title: 'Cultural experiences that will change your perspective.', author: 'Emma Wilson', date: '07 Dec', time: '4:20 PM', content: 'Immerse yourself in local cultures and traditions. From participating in traditional ceremonies to learning ancient crafts, these experiences will broaden your worldview and create lasting memories.' },
    { id: 5, image: './assets/images/blog.png', title: 'Sustainable tourism: How to travel responsibly.', author: 'David Lee', date: '08 Dec', time: '11:00 AM', content: 'Learn how to minimize your environmental impact while traveling. Discover eco-friendly accommodations, support local communities, and make choices that preserve destinations for future generations.' },
    { id: 6, image: './assets/images/hero-banner2.png', title: 'Mountain adventures and breathtaking landscapes.', author: 'Lisa Brown', date: '09 Dec', time: '3:30 PM', content: 'Explore majestic mountain ranges and witness stunning landscapes. From hiking the Himalayas to trekking through the Andes, these adventures offer both physical challenges and spiritual rewards.' }
  ];

  const openBlogDetail = (blog) => {
    setSelectedBlog(blog);
  };

  const closeBlogDetail = () => {
    setSelectedBlog(null);
  };

  const openContactForm = () => {
    setShowContactForm(true);
  };

  const closeContactForm = () => {
    setShowContactForm(false);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setShowContactForm(false);
  };

  const openLearnMore = () => {
    setShowLearnMore(true);
  };

  const closeLearnMore = () => {
    setShowLearnMore(false);
  };

  const openTerms = () => {
    setShowTerms(true);
  };

  const closeTerms = () => {
    setShowTerms(false);
  };



  return (
    <>
      <header className={`header ${isHeaderActive ? 'active' : ''}`}>
        <div className="container">
          <a href="#">
            <h1 className="logo">TravelMate</h1>
          </a>
          <button
            className={`nav-toggle-btn ${isNavOpen ? 'active' : ''}`}
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <ion-icon name="menu-outline" className="open"></ion-icon>
            <ion-icon name="close-outline" className="close"></ion-icon>
          </button>
          <nav className="navbar">
            <ul className="navbar-list">
              <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className="navbar-link">Home</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="navbar-link">About Us</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('popular'); }} className="navbar-link">Tours</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('destination'); }} className="navbar-link">Destinations</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('blog'); }} className="navbar-link">Blog</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('footer'); }} className="navbar-link">Contact Us</a></li>
            </ul>
            <a href="#" onClick={(e) => { e.preventDefault(); handleBooking(); }} className="btn btn-secondary">Booking Now</a>
          </nav>
        </div>
      </header>

      <main>
        <article>
          <section id="hero" className="section hero" style={{ backgroundImage: "url('./assets/images/hero-bg-bottom.png'), url('./assets/images/hero-bg-top.png')" }}>
            <div className="container">
              <img src="./assets/images/shape-1.png" width="61" height="61" alt="Vector Shape" className="shape shape-1" />
              <img src="./assets/images/shape-2.png" width="56" height="74" alt="Vector Shape" className="shape shape-2" />
              <img src="./assets/images/shape-3.png" width="57" height="72" alt="Vector Shape" className="shape shape-3" />
              <div className="hero-content">
                <p className="section-subtitle">Discover Amazing Places</p>
                <h2 className="hero-title">Your Dream Journey Awaits</h2>
                <p className="hero-text">Embark on extraordinary adventures with TravelMate. We create personalized travel experiences that turn your wanderlust into unforgettable memories across the globe.</p>
                <div className="btn-group">
                  <a href="#" onClick={(e) => { e.preventDefault(); openContactForm(); }} className="btn btn-primary">Contact Us</a>
                  <a href="#" onClick={(e) => { e.preventDefault(); openLearnMore(); }} className="btn btn-outline">Learn More</a>
                </div>
              </div>
              <figure className="hero-banner">
                <img src="./assets/images/hero-banner1.png" width="686" height="812" loading="lazy" alt="hero banner" className="w-100" />
              </figure>
            </div>
          </section>

          <section id="destination" className="section destination">
            <div className="container">
              <p className="section-subtitle">Destinations</p>
              <h2 className="h2 section-title">Choose Your Place</h2>
              <ul className="destination-list">
                {destinations.map(dest => (
                  <li key={dest.id} className={dest.className}>
                    <a href="#" className="destination-card">
                      <figure className="card-banner">
                        <img src={dest.image} width="1140" height="1100" loading="lazy" alt={`${dest.city}, ${dest.country}`} className="img-cover" />
                      </figure>
                      <div className="card-content">
                        <p className="card-subtitle">{dest.city}</p>
                        <h3 className="h3 card-title">{dest.country}</h3>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="popular" className="section popular">
            <div className="container">
              <p className="section-subtitle">Featured Tours</p>
              <h2 className="h2 section-title">Most Popular Tours</h2>
              <ul className="popular-list">
                {tours.map(tour => (
                  <li key={tour.id}>
                    <div className="popular-card">
                      <figure className="card-banner">
                        <a href="#">
                          <img src={tour.image} width="740" height="518" loading="lazy" alt={tour.location} className="img-cover" />
                        </a>
                        <span className="card-badge">
                          <ion-icon name="time-outline"></ion-icon>
                          <time dateTime="P12D">12 Days</time>
                        </span>
                      </figure>
                      <div className="card-content">
                        <div className="card-wrapper">
                          <div className="card-price">{tour.price}</div>
                          <div className="card-rating">
                            {[...Array(5)].map((_, i) => (
                              <ion-icon key={i} name={i < tour.rating ? 'star' : 'star-outline'}></ion-icon>
                            ))}
                            <data value="2">(2)</data>
                          </div>
                        </div>
                        <h3 className="card-title">
                          <a href="#">{tour.title}</a>
                        </h3>
                        <address className="card-location">{tour.location}</address>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="about" className="section about">
            <div className="container">
              <div className="about-content">
                <p className="section-subtitle">About TravelMate</p>
                <h2 className="h2 section-title">Creating Memories Around the World</h2>
                <p className="about-text">At TravelMate, we believe every journey should be extraordinary. With years of experience in crafting personalized travel experiences, we connect you with the world's most breathtaking destinations and authentic cultural experiences.</p>
                <ul className="about-list">
                  <li className="about-item">
                    <div className="about-item-icon">
                      <ion-icon name="compass"></ion-icon>
                    </div>
                    <div className="about-item-content">
                      <h3 className="h3 about-item-title">Expert Guides</h3>
                      <p className="about-item-text">Our certified local guides provide insider knowledge and authentic experiences that bring destinations to life.</p>
                    </div>
                  </li>
                  <li className="about-item">
                    <div className="about-item-icon">
                      <ion-icon name="briefcase"></ion-icon>
                    </div>
                    <div className="about-item-content">
                      <h3 className="h3 about-item-title">Best Value</h3>
                      <p className="about-item-text">Competitive pricing with transparent costs and no hidden fees. Get the most value for your travel investment.</p>
                    </div>
                  </li>
                  <li className="about-item">
                    <div className="about-item-icon">
                      <ion-icon name="umbrella"></ion-icon>
                    </div>
                    <div className="about-item-content">
                      <h3 className="h3 about-item-title">Safe & Secure</h3>
                      <p className="about-item-text">Travel with confidence knowing we prioritize your safety with comprehensive support and emergency assistance.</p>
                    </div>
                  </li>
                </ul>
                <a href="#" onClick={(e) => { e.preventDefault(); handleBooking(); }} className="btn btn-primary">Booking Now</a>
              </div>
              <figure className="about-banner">
                <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" width="756" height="842" loading="lazy" alt="Women travelers exploring" className="w-100" />
              </figure>
            </div>
          </section>

          <section id="blog" className="section blog">
            <div className="container">
              <p className="section-subtitle">From The Blog Post</p>
              <h2 className="h2 section-title">Latest News & Articles</h2>
              <ul className="blog-list">
                {blogs.map(blog => (
                  <li key={blog.id}>
                    <div className="blog-card">
                      <figure className="card-banner">
                        <a href="#">
                          <img src={blog.image} width="740" height="518" loading="lazy" alt={blog.title} className="img-cover" />
                        </a>
                        <span className="card-badge">
                          <ion-icon name="time-outline"></ion-icon>
                          <time dateTime="12-04">{blog.date}</time>
                        </span>
                      </figure>
                      <div className="card-content">
                        <div className="card-wrapper">
                          <div className="author-wrapper">
                            <figure className="author-avatar">
                              <img src={`./assets/images/author-avtar${blog.id <= 3 ? '1' : ''}.png`} width="30" height="30" alt={blog.author} />
                            </figure>
                            <div>
                              <a href="#" className="author-name">{blog.author}</a>
                              <p className="author-title">Admin</p>
                            </div>
                          </div>
                          <time className="publish-time" dateTime="10:30">{blog.time}</time>
                        </div>
                        <h3 className="card-title">
                          <a href="#">{blog.title}</a>
                        </h3>
                        <a href="#" onClick={(e) => { e.preventDefault(); openBlogDetail(blog); }} className="btn-link">
                          <span>Read More</span>
                          <ion-icon name="arrow-forward-outline"></ion-icon>
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </article>
      </main>

      <footer id="footer" className="footer" style={{ backgroundImage: "url('./assets/images/footer-bg.png')" }}>
        <div className="container">
          <div className="footer-top">
            <ul className="footer-list">
              <li><p className="footer-list-title">Top destination</p></li>
              <li><a href="#" className="footer-link">Indonesia, Jakarta</a></li>
              <li><a href="#" className="footer-link">Maldives, Malé</a></li>
              <li><a href="#" className="footer-link">Australia, Canberra</a></li>
              <li><a href="#" className="footer-link">Thailand, Bangkok</a></li>
              <li><a href="#" className="footer-link">Morocco, Rabat</a></li>
            </ul>
            <ul className="footer-list">
              <li><p className="footer-list-title">Categories</p></li>
              <li><a href="#" className="footer-link">Travel</a></li>
              <li><a href="#" className="footer-link">Lifestyle</a></li>
              <li><a href="#" className="footer-link">Fashion</a></li>
              <li><a href="#" className="footer-link">Education</a></li>
              <li><a href="#" className="footer-link">Food & Drink</a></li>
            </ul>
            <ul className="footer-list">
              <li><p className="footer-list-title">Quick links</p></li>
              <li><a href="#" className="footer-link">About</a></li>
              <li><a href="#" className="footer-link">Contact</a></li>
              <li><a href="#" className="footer-link">Tours</a></li>
              <li><a href="#" className="footer-link">Booking</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); openTerms(); }} className="footer-link">Terms & Conditions</a></li>
            </ul>
            <ul className="footer-list">
              <li><p className="footer-list-title">Follow Us</p></li>
              <li><a href="https://github.com/Simran-Kumari123" target="_blank" rel="noopener noreferrer" className="footer-link"><ion-icon name="logo-github"></ion-icon> GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/simran-kumari-403737292" target="_blank" rel="noopener noreferrer" className="footer-link"><ion-icon name="logo-linkedin"></ion-icon> LinkedIn</a></li>
              <li><a href="https://www.youtube.com/@simrankumari1480" target="_blank" rel="noopener noreferrer" className="footer-link"><ion-icon name="logo-youtube"></ion-icon> YouTube</a></li>
              <li><a href="https://app.netlify.com/teams/simran-kumari123/projects" target="_blank" rel="noopener noreferrer" className="footer-link"><ion-icon name="globe-outline"></ion-icon> Netlify</a></li>
            </ul>

          </div>
          <div className="footer-bottom">
            <a href="#" className="logo">TravelMate</a>
            <p className="copyright">
              © {new Date().getFullYear()} Crafted with ❤️ by{" "}
              <a
                href="https://github.com/Simran-Kumari123"
                target="_blank"
                rel="noopener noreferrer"
                className="copyright-link"
              >
                Simran Kumari
              </a>
            </p>
          </div>
        </div>
      </footer>

      <a href="#top" className="go-top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
        <ion-icon name="chevron-up-outline"></ion-icon>
      </a>

      {selectedBlog && (
        <div className="blog-modal" onClick={closeBlogDetail}>
          <div className="blog-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeBlogDetail}>
              <ion-icon name="close-outline"></ion-icon>
            </button>
            <img src={selectedBlog.image} alt={selectedBlog.title} className="modal-image" />
            <div className="modal-body">
              <h2>{selectedBlog.title}</h2>
              <div className="modal-meta">
                <span>By {selectedBlog.author}</span>
                <span>{selectedBlog.date} at {selectedBlog.time}</span>
              </div>
              <p>{selectedBlog.content}</p>
            </div>
          </div>
        </div>
      )}

      {showContactForm && (
        <div className="contact-modal" onClick={closeContactForm}>
          <div className="contact-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeContactForm}>
              <ion-icon name="close-outline"></ion-icon>
            </button>
            <h2>Contact Us</h2>
            <form onSubmit={handleContactSubmit}>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone Number" />
              </div>
              <div className="form-group">
                <select required>
                  <option value="">Select Service</option>
                  <option value="tour">Tour Booking</option>
                  <option value="consultation">Travel Consultation</option>
                  <option value="custom">Custom Package</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="4" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      )}

      {showLearnMore && (
        <div className="learn-modal" onClick={closeLearnMore}>
          <div className="learn-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeLearnMore}>
              <ion-icon name="close-outline"></ion-icon>
            </button>
            <h2>About TravelMate</h2>
            <div className="learn-content">
              <h3>Why Choose TravelMate?</h3>
              <p>TravelMate is your trusted companion for exploring the world's most beautiful destinations. We specialize in creating unforgettable travel experiences tailored to your preferences.</p>

              <h3>Our Services</h3>
              <ul>
                <li><strong>Custom Tour Packages:</strong> Personalized itineraries based on your interests and budget</li>
                <li><strong>Expert Guides:</strong> Local professionals who know the hidden gems</li>
                <li><strong>24/7 Support:</strong> We're here to help throughout your journey</li>
                <li><strong>Best Price Guarantee:</strong> Competitive rates with no hidden fees</li>
              </ul>

              <h3>Popular Destinations</h3>
              <p>From the pristine beaches of Maldives to the cultural richness of Thailand, we offer tours to over 50+ destinations worldwide. Each trip is carefully planned to ensure maximum enjoyment and safety.</p>

              <h3>Travel Tips</h3>
              <p>Our experienced team provides valuable insights, travel tips, and recommendations to make your journey smooth and memorable. We handle all the logistics so you can focus on creating memories.</p>
            </div>
          </div>
        </div>
      )}

      {showTerms && (
        <div className="terms-modal" onClick={closeTerms}>
          <div className="terms-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeTerms}>
              <ion-icon name="close-outline"></ion-icon>
            </button>
            <h2>Terms & Conditions</h2>
            <div className="terms-content">
              <h3>1. Booking and Payment</h3>
              <p>All bookings must be confirmed with a deposit. Full payment is required 30 days before departure. Cancellations made within 14 days of departure are subject to full charges.</p>

              <h3>2. Travel Insurance</h3>
              <p>We strongly recommend comprehensive travel insurance. TravelMate is not responsible for costs arising from medical emergencies, trip cancellations, or lost luggage.</p>

              <h3>3. Passport and Visa Requirements</h3>
              <p>Travelers are responsible for ensuring valid passports and obtaining necessary visas. TravelMate will provide guidance but cannot be held liable for entry refusals.</p>

              <h3>4. Itinerary Changes</h3>
              <p>TravelMate reserves the right to modify itineraries due to weather, safety concerns, or unforeseen circumstances. We will provide suitable alternatives when possible.</p>

              <h3>5. Liability</h3>
              <p>TravelMate acts as an agent for transportation, accommodation, and activity providers. Our liability is limited to the cost of services booked through us.</p>

              <h3>6. Behavior Policy</h3>
              <p>Travelers must respect local customs and laws. TravelMate reserves the right to remove disruptive participants from tours without refund.</p>

              <h3>7. Privacy Policy</h3>
              <p>We protect your personal information and use it only for booking purposes and travel-related communications. We do not share data with third parties without consent.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
