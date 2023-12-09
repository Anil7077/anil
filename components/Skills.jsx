import React from 'react'

const Skills = ({darkMode}) => {
    return (
        <>
            <section className={darkMode ? "my-skills sections" : "my-skills"} id="my-skills">
                <h2 className="mb-4">My Expertise</h2>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="web-design mb-4">
                            <img src="/images/coding.png" alt="aa" />
                            <h3>Website development</h3>
                        </div>
                        <div className="web-design ">
                            <img src="/images/app-development.png" alt="aaa" />
                            <h3>Website designing</h3>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h6 className="mb-3" style={{wordBreak: "break-all"}}>Coding languages/Frameworks/Libraries/VCS</h6>
                        <button style={{ backgroundColor: '#087ea4', color: 'rgb(255, 255, 255)' }}>React js</button>
                        <button style={{ backgroundColor: darkMode ? "grey" : '#000000', color: 'rgb(255, 255, 255)' }}>Next js</button>
                        <button style={{ backgroundColor: '#efd81d', color: 'rgb(0, 0, 0)' }}>Javascript</button>
                        <button style={{ backgroundColor: '#dd4b25', color: 'rgb(0, 0, 0)' }}>HTML5</button>
                        <button style={{ backgroundColor: '#254bdd', color: 'aliceblue' }}>CSS3</button>
                        <button style={{ backgroundColor: '#8210f5', color: 'rgb(255, 255, 255)' }}>BOOTSTRAP5</button>
                        <button style={{ backgroundColor: '#e84e31', color: 'rgb(255, 255, 255)' }}>Git</button>
                        <button style={{ backgroundColor: darkMode ? "grey" : '#000000', color: 'rgb(255, 255, 255)' }}>GitHub</button>
                        <button style={{ backgroundColor: '#764abc', color: 'aliceblue' }}>Redux Toolkit</button>
                        <button style={{ backgroundColor: '#3b7cef', color: 'rgb(255, 255, 255)' }}>Material
                            UI</button>
                        <button style={{ backgroundColor: '#f77377', color: 'rgb(255, 255, 255)' }}>Chart js</button>
                        <button style={{ backgroundColor: '#f44250', color: 'aliceblue' }}>React Router</button>
                        <button style={{ backgroundColor: '#ec5990', color: 'rgb(255, 255, 255)' }}>React Hook
                            Form</button>
                        <button style={{ backgroundColor: '#507e9c', color: 'aliceblue' }}>Java</button>
                        <button style={{ backgroundColor: '#0866ff', color: 'aliceblue' }}>MySQL</button>
                    </div>
                </div>
                <div className='shape'></div>
            </section>

        </>
    )
}

export default Skills