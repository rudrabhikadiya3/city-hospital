import React from 'react';

function Home(props) {
    return (

        <div>
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <h1>Welcome to City <br />Multispeciality Hospital</h1>
                    <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                </div>
            </section>
            <main id="main">
                <section id="why-us" className="why-us">
                </section>
                <section id="counts" className="counts">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="count-box">
                                    <i className="fas fa-user-md" />
                                    <span>23</span>
                                    <p>Doctors</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                                <div className="count-box">
                                    <i className="far fa-hospital" />
                                    <span>18</span>
                                    <p>Departments</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                                <div className="count-box">
                                    <i className="fas fa-heartbeat" />
                                    <span>980</span>
                                    <p>Patients</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                                <div className="count-box">
                                    <i className="fas fa-award" />
                                    <span>12</span>
                                    <p>Awards</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="services" className="services">
                    <div className="container">
                        <div className="section-title">
                            <h2>Our Facilities</h2>
                            <p>Nunc aliquam eget nibh eu euismod. Donec dapibus blandit quam volutpat sollicitudin. Fusce tincidunt sit
                                amet ex in volutpat. Donec lacinia finibus tortor. Curabitur luctus eleifend odio. Phasellus placerat mi et
                                suscipit pulvinar. Donec quis tristique lectus.</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-hospital-alt" /></div>
                                    <h4><a href='#'>24x7 Emergency Available</a></h4>
                                    <p>Nullam accumsan, velit et porta consequat, purus leo congue risus</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-bed" /></div>
                                    <h4><a href='#'>40+ Bed Facilities</a></h4>
                                    <p>Pellentesque id felis elit. Pellentesque blandit sem a nisi dictum</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-hospital-user" /></div>
                                    <h4><a href='#'>Cardiogram Machine</a></h4>
                                    <p>Donec lacinia finibus tortor. Curabitur luctus eleifend odio.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-dna" /></div>
                                    <h4><a href='#'>X-ray and Sonography</a></h4>
                                    <p>Aliquam auctor felis ut sem elementum, ac rutrum turpis venenatis.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-wheelchair" /></div>
                                    <h4><a href='#'>Semi Special, Special and Delux Room Available</a></h4>
                                    <p>Etiam in massa eu neque euismod consectetur.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-notes-medical" /></div>
                                    <h4><a href='#'>Medical</a></h4>
                                    <p>Morbi vulputate, tortor nec pellentesque molestie</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="testimonials" className="testimonials">
                    <div className="container">
                        <div className="section-title"><h2>Reviews</h2></div>
                        <div className="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay={100}>
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="testimonial-wrap">
                                        <div className="testimonial-item">
                                            <img src="/assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt='testimonials-1' />
                                            <h3>Jacob Wilsson</h3>
                                            <h4>Writer</h4>
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left" />
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere, lacus ac tincidunt tempor,
                                                sapien justo ultrices ante, vel pharetra turpis ex ac nisi. Aliquam tempor egestas turpis, nec
                                                commodo lorem egestas eleifend. Curabitur lacus ipsum, fermentum sit amet leo non, blandit tincidunt
                                                turpis.
                                                <i className="bx bxs-quote-alt-right quote-icon-right" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonial-wrap">
                                        <div className="testimonial-item">
                                            <img src="/assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt='testimonials-2' />
                                            <h3>Ava Smith</h3>
                                            <h4>Artist</h4>
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left" />
                                                Praesent pellentesque leo vestibulum, facilisis ante eget, pharetra mi. Curabitur risus mauris,
                                                dignissim ullamcorper vehicula id, aliquet ut turpis. Nunc euismod nec nulla non tincidunt. Vivamus
                                                nisi mauris, blandit quis sem sit amet, posuere blandit diam. Cras quis quam suscipit.
                                                <i className="bx bxs-quote-alt-right quote-icon-right" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonial-wrap">
                                        <div className="testimonial-item">
                                            <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt='testimonials-3' />
                                            <h3>Abigail Martin</h3>
                                            <h4>Teacher</h4>
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left" />
                                                Fusce ante ipsum, convallis auctor dui sit amet, feugiat blandit ex. Etiam eget tortor sed augue
                                                laoreet laoreet vel non libero. Sed in nibh ut sem ornare feugiat at at risus. Morbi gravida enim
                                                vitae tortor fringilla tristique. Nulla ac mauris et elit eleifend suscipit et quis lacus. Nam nec
                                                ex purus.
                                                <i className="bx bxs-quote-alt-right quote-icon-right" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonial-wrap">
                                        <div className="testimonial-item">
                                            <img src="/assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt='testimonials-4`' />
                                            <h3>Alexander Tremblay</h3>
                                            <h4>Designer</h4>
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left" />
                                                Nam at est in nibh cursus hendrerit. Nunc commodo diam a erat fermentum aliquet. Integer at interdum
                                                nisi. Vivamus risus erat, facilisis a blandit ut, sollicitudin sed est. Vestibulum volutpat luctus
                                                quam sed finibus. Sed luctus odio eget ex posuere hendrerit. Donec iaculis
                                                <i className="bx bxs-quote-alt-right quote-icon-right" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonial-wrap">
                                        <div className="testimonial-item">
                                            <img src="/assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt='testimonials-5' />
                                            <h3>Jayden Brown</h3>
                                            <h4>Entrepreneur</h4>
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left" />
                                                Quisque tristique lectus eget pretium lacinia. Mauris suscipit sapien sit amet enim rhoncus
                                                tristique. Phasellus dictum aliquam nisl vel fermentum. Duis viverra luctus justo, vel aliquam ipsum
                                                mollis nec. Pellentesque quis suscipit erat. Mauris id lobortis tellus.
                                                <i className="bx bxs-quote-alt-right quote-icon-right" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="gallery" className="gallery">
                    <div className="container">
                        <div className="section-title">
                            <h2>Gallery</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                                consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                                in iste officiis commodi quidem hic quas.</p>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row no-gutters">
                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="/assets/img/gallery/gallery-1.jpg" className="galelry-lightbox">
                                        <img src="/assets/img/gallery/gallery-1.jpg" alt='gallary-1' className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="assets/img/gallery/gallery-2.jpg" className="galelry-lightbox">
                                        <img src="assets/img/gallery/gallery-2.jpg" alt='gallary-2' className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="/assets/img/gallery/gallery-3.jpg" className="galelry-lightbox">
                                        <img src="/assets/img/gallery/gallery-3.jpg" alt='gallary-3' className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="/assets/img/gallery/gallery-4.jpg" className="galelry-lightbox">
                                        <img src="/assets/img/gallery/gallery-4.jpg" alt='gallary-4' className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="assets/img/gallery/gallery-5.jpg" className="galelry-lightbox">
                                        <img src="assets/img/gallery/gallery-5.jpg" alt='gallary-5' className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="assets/img/gallery/gallery-6.jpg" className="galelry-lightbox">
                                        <img src="assets/img/gallery/gallery-6.jpg" alt='gallary-6' className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="assets/img/gallery/gallery-7.jpg" className="galelry-lightbox">
                                        <img src="assets/img/gallery/gallery-7.jpg" alt='gallary-7' className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="assets/img/gallery/gallery-8.jpg" className="galelry-lightbox">
                                        <img src="assets/img/gallery/gallery-8.jpg" alt='gallary-8' className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>

    );
}

export default Home;