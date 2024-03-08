import React from "react";

function ContactUs() {
    return (
        <div className="dark:text-white">
            <h1 className="text-2xl font-bold  text-center">Get In Touch</h1>
            <p className="text-center w-2/3 m-auto mt-3 text-bold">
                Have a question, feedback, or just want to say hello? We'd love
                to hear from you! Fill out the form below to get in touch with
                us.
            </p>
            <div className="w-1/2 m-auto my-20">
                <h1 className="text-lg font-semibold mb-2">Email : </h1>
                <p className="text-bold">kanhadehury2001@gmail.com </p>
                <br />
                <br />
                <h1 className="text-lg font-semibold mb-2">Address : </h1>
                <p className="text-bold">
                    Dakhinakali road , Dakhinakali <br />
                    Dhenkanal,Odisha <br />
                    759001
                </p>
            </div>
        </div>
    );
}

export default ContactUs;
