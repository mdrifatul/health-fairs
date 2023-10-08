
const Appoinment = () => {
  return (
    <div>
            <div data-aos='zoom-in' >
        <form className="w-4/5 md:w-2/5 lg:w-2/5 my-5 mx-auto">
            <div className="form-control">
                <input type="text" required name="name" placeholder="Name" className="input input-bordered" />
            </div>
            <div className="form-control mt-2">
            <input type="text" required name="phone" placeholder="Phone Number" className="input input-bordered" />
            </div>
            <div className="form-control my-2">
                <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
            </div>
            <div className="form-control">
            <input type="date" required name="date" placeholder="Appoinment Date" value="2023-11-22" className="input input-bordered w-full" />
            </div>
            <div className="form-control">
              <textarea className="border-2 rounded-lg border-slate-200 p-4 mt-2" name="" id="" cols="10" rows="2" placeholder="Message">
              </textarea>
            </div>
            <div className="form-control mt-6">
                <button className="btn bg-blue hover:bg-blue text-white">Submit</button>
            </div>

        </form>
    </div>
      
    </div>
  );
};

export default Appoinment;