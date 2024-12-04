import React from 'react';

const Header = () => {
      return (
            <div>
                  <div>
                        <div className="carousel w-full">
                              <div id="slide1" className="carousel-item relative w-full">
                                    <img
                                          src="https://i.ibb.co.com/sPPjYNM/photo-1531482615713-2afd69097998-q-80-w-1740-auto-format-fit-crop-ixlib-rb-4-0.jpg"
                                          className="w-full" />
                                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                          <a href="#slide4" className="btn btn-circle">❮</a>
                                          <a href="#slide2" className="btn btn-circle">❯</a>
                                    </div>
                              </div>
                              <div id="slide2" className="carousel-item relative w-full">
                                    <img
                                          src="https://i.ibb.co.com/Jk8bTQx/photo-1504805572947-34fad45aed93-q-80-w-1740-auto-format-fit-crop-ixlib-rb-4-0.jpg"
                                          className="w-full" />
                                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                          <a href="#slide1" className="btn btn-circle">❮</a>
                                          <a href="#slide3" className="btn btn-circle">❯</a>
                                    </div>
                              </div>
                              <div id="slide3" className="carousel-item relative w-full">
                                    <img
                                          src="https://i.ibb.co.com/5XDDNqN/photo-1534134368327-3d2bd764f1ac-q-80-w-1740-auto-format-fit-crop-ixlib-rb-4-0.jpg"
                                          className="w-full" />
                                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                          <a href="#slide2" className="btn btn-circle">❮</a>
                                          <a href="#slide4" className="btn btn-circle">❯</a>
                                    </div>
                              </div>
                              <div id="slide4" className="carousel-item relative w-full">
                                    <img
                                          src="https://i.ibb.co.com/Htpd8S0/photo-1649573650935-1ccc6b31a88a-q-80-w-1738-auto-format-fit-crop-ixlib-rb-4-0.jpg"
                                          className="w-full" />
                                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                          <a href="#slide3" className="btn btn-circle">❮</a>
                                          <a href="#slide1" className="btn btn-circle">❯</a>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Header;