function ContactPage(){
    return (
        <div className='contact'>

            <h1>Contact Us</h1>

            <form>
                <input
                   type="text"
                   placeholder="Name"
                />

                <input
                   type="email"
                   placeholder="Email"
                />

                <textarea
                   placeholder="Message"
                ></textarea>

                <button type="submit">
                   Send Message
                </button>
            </form>
        </div>
    );
}
export default ContactPage;