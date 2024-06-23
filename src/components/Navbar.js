import React from 'react';
import data from '../../src/data';
// import axio from '../Instance';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';


const Navbar = () => {

    // const [email, setEmail] = useState('');
    // const [comment, setComment] = useState('');
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    // const clearForm = () => {
    //     setEmail('');
    //     setComment('');
    // };



    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     axio.post('/comments', {
    //         email,
    //         comment
    //     })
    //         .then(() => {
    //             console.log('Review submitted');
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    //     clearForm();
    // };


    return (
        <>
            {/* navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark */}
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark fixed-top">
                <div className="container-fluid ps-5">
                    <a className="navbar-brand" href="/">LOGO</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav my-2 ms-auto me-0">
                            <li className="nav-item">
                                <a className={`nav-link ${data.path === `/${data.link1.b}` ? 'active' : ''}`} aria-current="page" href={`/${data.link1.b}`}>{data.link1.a}</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${data.path === `/${data.link2.b}` ? 'active' : ''}`} aria-current="page" href={`/${data.link2.b}`}>{data.link2.a}</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${data.path === `/${data.link3.b}` ? 'active' : ''}`} aria-current="page" href={`/${data.link3.b}`}>{data.link3.a}</a>
                            </li>
                        </ul>
                        {/* <span id='reviewModal' className="d-flex">
                                <Button variant="primary" onClick={handleShow}>Write a Review</Button>
                            </span> */}
                    </div>
                </div>
            </nav>
            {/* <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div
                        className="modal show"
                        style={{ display: 'block', position: 'initial' }}
                    >
                        <form // onSubmit={handleSubmit}
                        >
                            <div className="form-group">
                                <label htmlFor="email"
                                    className='form-label fs-5'
                                >Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    required
                                    className='form-control'
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="comment"
                                    className='form-label fs-5'
                                >Comment</label>
                                <textarea
                                    id="comment"
                                    value={comment}
                                    onChange={(event) => setComment(event.target.value)}
                                    required
                                    className='form-control'
                                />
                            </div>
                            <Button type="submit">Submit</Button>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal> */}
        </>
    );
}

export default Navbar;
