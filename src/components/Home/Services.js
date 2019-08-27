import React from "react"
import Title from "../Title"
import services from "../../constants/services"
import styles from "../../css/services.module.css"

const Services = () => {
  return (
    <section className={styles.services}>
      <Title title="our" subtitle="services"></Title>
      <div className={styles.center}>
        {services.map((service, index) => (
          <article className={styles.service} key={index}>
            <span>{service.icon}</span>
            <h4>{service.title}</h4>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
