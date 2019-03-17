import React from 'react'

const About = () => {
    return (
        <section className="about-section">
            <div className="about-container">
                <div className="about-content">
                    <h2 className="about-title">About this page</h2>
                    <div className="about-body">
                        <p className="about-p">
                            This page is using OMDb API, react, redux, redux-thunk, axios, validator, classnames and uuid.
                        </p>

                        <p className="about-p">
                            For the design I have decided not to use React-Bootstrap or React-Materialize in this project. The input validation form was made with validator and classnames. I have used flexbox, some CSS3 features such as clip-path.
                        Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons" target="_blank">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a> and transformed into favicon by <a href="https://www.favicon-generator.org/" target="_blank">favicon-generator.org</a>
                        </p>
                        <p className="about-p">
                            I hope you've enjoyd this page. You can watch some of my other projects on my <a href="https://yardenb.github.io/yarden-portfolio/" target="_blank">portfolio website</a> and I'm available for any question at <a href="mailto:yardenbesh@gmail.com">yardenbesh@gmail.com</a>
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default About