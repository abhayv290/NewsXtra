
import { useState } from 'react'
import News from './News.js'

export default function Home({ apikey }) {
  const [progress, setProgress] = useState(5);
  const [form, setForm] = useState('home');
  const [click, setClick] = useState(false);
  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setClick(false);
    setForm(value)
    console.log(form)

  }
  function handleClick() {
    console.log(form);
    setClick(true);
  }
  return (
    <div>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Type in box to get the news you want to see</label>
          <input onChange={handleChange} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

        </div>
        <button onClick={handleClick} type="button" className="btn btn-primary">Submit</button>
      </form>
      <div className='my-4'>
        {click &&
          <News
            key={form}

            setprogress={setProgress}
            apikey={apikey}
            category={form.length == 0 ? 'Home' : form}
            headline="This is NewsXtra Home Page"
          />
        }
      </div>
    </div>
  )
}

