import React, { useRef } from 'react';
import styles from '../styles/contact.module.css';
import '../styles/input.css';
import logo from '../images/logowithname.png';
import {useForm} from 'react-hook-form';
import emailjs from "@emailjs/browser";

export const Contact = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
} = useForm();
  const form = useRef();
const onSubmit = async (data) => {
  let info = {
      info: true
  };
  data = {...data, ...info};

  emailjs.sendForm('service_bz709pi', 'template_efiz5zm', form.current, 'g7X702yKWjWHyIfur')
    .then((res)=>{
      console.log(res.text);
    },(err)=>{
      console.error(err)
    })
  reset();
};

  return (
    <div className={styles.container}>

    <div className={styles.header}>
      <img src={logo} alt="Three Columns Logo" className={styles.logo}/>
      <div>
        <span>
          We&apos;re <br/> building.
        </span>
      </div>
    </div>

    <div className={styles.content}>

      <div className={styles.building}>
        <span>
          Let&apos;s talk!
        </span>
      </div>

      <div className={styles.contact}>
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.div1}>

            <div className="form__group field">
              <input 
                className="form__field" 
                placeholder="Name" 
                name='name'
                {...register('name', {
                  required: true,
                  minLength: 4
                  })
                }
              />
              {errors.name?.type === 'minLength' ? (
                <p className="error">
                  You must write a larger name.
                </p>
                ) 
                : 
                null
              }
              {errors.name?.type === 'required' ? (
                <p className="error">
                  Field required
                </p>
                ) 
                : 
                null
              }
              <label htmlFor="name" className="form__label">What's your name?</label>
            </div>
            <div className="form__group field">
              <input 
                className="form__field" 
                placeholder="Name" 
                name='email'
                {...register('email', {
                  required: true,
                  })
                }
              />
              {errors.email?.type === 'required' ? (
                <p className="error">
                  Field required
                </p>
                ) 
                : 
                null
              }
              <label htmlFor="email" className="form__label">What's your email?</label>
            </div>
            <div className="form__group field">
              <input 
                className="form__field" 
                placeholder="Name" 
                name="makeforyou" 
                {...register('makeforyou', {
                  required: true,
                  maxLength: 50
                })
                }
              />
              {errors.makeforyou?.type === 'required' ? (
                <p className="error">
                  Field required
                </p>
                ) 
                : 
                null
              }
              {errors.makeforyou?.type === 'maxLength' ? (
                <p className="error">
                  You must write a shorter sentence.
                </p>
                ) 
                : 
                null
              }
              <label htmlFor="makeforyou" className="form__label">What can we make for you?</label>
            </div>

          </div>
          <div className={styles.div2}>

            <div className="form__group field">
                <input 
                  className="form__field" 
                  placeholder="Name"
                  name='budget' 
                  {...register('budget', {
                    required: true,
                    maxLength: 20
                    })
                  }
                />
                {errors.budget?.type === 'required' ? (
                <p className="error">
                  Field required
                </p>
                ) 
                : 
                null
              }
              <label htmlFor="budget" className="form__label">What's your budget?</label>
            </div>
            <div className="form__group field">
              <textarea 
                  name='description'
                  {...register('description', {
                  required: true,
                  minLength: 100
                  })
                }
              />
              {errors.description?.type === 'required' ? (
                <p className="error">
                  Field required
                </p>
                ) 
                : 
                null
              }
              {errors.description?.type === 'minLength' ? (
                <p className="error">
                  Your project description must have 100 characters at least.
                </p>
                ) 
                : 
                null
              }
              <label htmlFor="talk" className="form__label">Describe your project in detail:</label>
            </div>

          </div>
          <div className={styles.div3}>

            <button type='submit'>
              Get in touch!
              <span className="first"></span>
              <span className="second"></span>
              <span className="third"></span>
              <span className="fourth"></span>
            </button>
            <div className={styles.working}>
              <span>
                We&apos;re working on our new website.
              </span>
            </div>
            <div className={styles.copyright}>
              <p>
                All rights reserved &#169; 2023.
              </p>
            </div>
            <div className={styles.foot}>
              <span>
                We&apos;re building.
              </span>
              <br/>
              <span>
                We&apos;re working on our new website.
              </span>
              <p>
                All rights reserved &#169; 2023.
              </p>
            </div>
          </div>

        </form>

      </div>
    </div>
  </div>
  )
};
