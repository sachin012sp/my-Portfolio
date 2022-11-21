<template>
  <section>
    <div class="close">
      <router-link to="/">
        <button
          type="button"
          class="btn-close btn-close-white"
          aria-label="Close"
        ></button>
      </router-link>
    </div>
    <div class="description">
      <p class="text-white-50">Feel free to contact me anytimes</p>
      <h2>Get in Touch</h2>
      <div class="animated-bar"></div>
    </div>
    <div class="contact">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 message">
            <h4>Message Me</h4>
            <form
              class="row g-3 needs-validation"
              validate
              action="mailto:lidyaboshra15@gmail.com"
              method="post"
              name="EmailForm"
              enctype="text/plain"
            >
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom01"
                  required
                  placeholder="Name"
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div class="col-md-6">
                <input
                  type="email"
                  class="form-control"
                  id="validationCustom02"
                  required
                  placeholder="Email"
                />
                <div class="valid-feedback">Looks good!</div>
              </div>

              <div class="col-md-12">
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom03"
                  required
                  placeholder="Subject"
                />
                <div class="invalid-feedback">Please provide a valid city.</div>
              </div>

              <div class="col-md-12">
                <textarea cols="30" rows="5" placeholder="Message"></textarea>
                <div class="invalid-feedback">Please provide a valid zip.</div>
              </div>

              <div class="col-12">
                <button class="btn btn-primary" type="submit">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div class="col-lg-5">
            <h4>Contact Info</h4>
            <p class="text-white-50">
              Always available for freelance work if the right project comes
              along, Feel free to contact me!
            </p>
            <ul class="list-unstyled list-info">
              <li>
                <div class="media align-items-center">
                  <span class="info-icon"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                      <path
                        d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z"
                      /></svg
                  ></span>
                  <div class="media-body info-details">
                    <h6 class="info-type">Name</h6>
                    <span class="info-value">Lidya Boshra</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="media align-items-center">
                  <span class="info-icon"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                      <path
                        d="M302.8 312C334.9 271.9 408 174.6 408 120C408 53.7 354.3 0 288 0S168 53.7 168 120c0 54.6 73.1 151.9 105.2 192c7.7 9.6 22 9.6 29.6 0zM416 503l144.9-58c9.1-3.6 15.1-12.5 15.1-22.3V152c0-17-17.1-28.6-32.9-22.3l-116 46.4c-.5 1.2-1 2.5-1.5 3.7c-2.9 6.8-6.1 13.7-9.6 20.6V503zM15.1 187.3C6 191 0 199.8 0 209.6V480.4c0 17 17.1 28.6 32.9 22.3L160 451.8V200.4c-3.5-6.9-6.7-13.8-9.6-20.6c-5.6-13.2-10.4-27.4-12.8-41.5l-122.6 49zM384 255c-20.5 31.3-42.3 59.6-56.2 77c-20.5 25.6-59.1 25.6-79.6 0c-13.9-17.4-35.7-45.7-56.2-77V449.4l192 54.9V255z"
                      /></svg
                  ></span>
                  <div class="media-body info-details">
                    <h6 class="info-type">Location</h6>
                    <span class="info-value">Egypt, Cairo</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="media align-items-center">
                  <span class="info-icon"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                      <path
                        d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                      /></svg
                  ></span>
                  <div class="media-body info-details">
                    <h6 class="info-type">Call Me</h6>
                    <span class="info-value"
                      ><a href="tel:01275036476">01275036476</a></span
                    >
                  </div>
                </div>
              </li>
              <li>
                <div class="media align-items-center">
                  <span class="info-icon"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                      <path
                        d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L277.3 424.9l-40.1 74.5c-5.2 9.7-16.3 14.6-27 11.9S192 499 192 488V392c0-5.3 1.8-10.5 5.1-14.7L362.4 164.7c2.5-7.1-6.5-14.3-13-8.4L170.4 318.2l-32 28.9 0 0c-9.2 8.3-22.3 10.6-33.8 5.8l-85-35.4C8.4 312.8 .8 302.2 .1 290s5.5-23.7 16.1-29.8l448-256c10.7-6.1 23.9-5.5 34 1.4z"
                      /></svg
                  ></span>
                  <div class="media-body info-details">
                    <h6 class="info-type">Email Me</h6>
                    <span class="info-value"
                      ><a href="mailto:lidyaboshra15@gmail.com"
                        >lidyaboshra15@gmail.com</a
                      ></span
                    >
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Contact",
};
</script>
<style scoped>
section {
  z-index: 999;
  background-color: #111;
  width: 100%;
  position: absolute;
  min-height: 100vh;
}
.close {
  display: flex;
  justify-content: flex-end;
  position: fixed;
  width: 100%;
  background-color: #111;
}
.close button {
  font-size: 25px;
  opacity: 1;
  margin: 23px 70px;
}
.description {
  margin-bottom: 83px;
  text-align: center;
  margin-top: 90px;
}
.description p {
  font-size: 14px;
  margin-bottom: 17px;
}
.description h2 {
  font-size: 46px;
  margin-bottom: 37px;
  font-weight: 700;
  letter-spacing: -0.25px;
  line-height: 100%;
  color: #f0f0f0;
}
.animated-bar {
  content: "";
  display: block;
  height: 4px;
  left: 0;
  margin: 0 auto 0 auto;
  position: relative;
  right: 0;
  width: 75px;
  background-color: #009e66;
}
.animated-bar::before,
.animated-bar::after {
  animation: barAnimation 3s infinite linear;
  background-color: #101010;
  content: "";
  height: 100%;
  position: absolute;
  top: 0;
  width: 4px;
  left: 8px;
}

@keyframes barAnimation {
  100% {
    left: 100%;
  }
}
.contact {
  text-align: left;
}
h4 {
  line-height: 1.5;
  margin-bottom: 22px;
}
.message {
  padding-right: 40px;
}
.form-control {
  border-radius: none;
  background-color: #161616;
  border-color: #161616;
  color: #777;
  font-size: 15px;
  height: 44px;
  padding: 9px 14px;
}
textarea {
  width: 100%;
  background-color: #161616;
  border-color: #161616;
  color: #777;
  font-size: 15px;
  padding: 9px 14px;
}
.contact .btn-primary {
  border-radius: 30px;
  font-size: 14px;
  background-color: #009e66;
  border-color: #009e66;
  padding: 10px 26px;
}
ul p {
  font-size: 15px;
  margin-bottom: 28px;
}

.media {
  display: flex;
}
.info-icon {
  margin-right: 50px;
  position: relative;
  margin-bottom: 13px;
  font-size: 36px;
}
.info-icon svg {
  left: 0;
  line-height: 100%;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  width: 29px;
  height: 37px;
  fill: #009e66;
}
.info-details {
  border-left: 2px solid rgba(255, 255, 255, 0.15);
  padding: 12px 0 12px 22px;
}

.info-details .info-type {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 0;
}
.info-value,
a {
  color: #777;
}
a {
  text-decoration: none;
  overflow-wrap: anywhere;
}
a:hover,
a:focus {
  color: #5a5858;
}
@media (max-width: 992px) {
  .col-lg-5 {
    margin-top: 53px;
  }
}
</style>
