function createPerfilsHtml(data) {
  return `
  <p class="texto" contenteditable="false"
  placeholder="Write here a paragraph about yourself or you can change the title to read 'Objective'."
  style=" text-align: justify;">${data.perfil}</p>
  `
}

function createIntroHtml(data) {
  return `
  <!-- <li class="li27" id="foto" style="display: block;"> <label for="inputfoto2"
      style="cursor:pointer">
      <div class="cont_fotodiv"
          style="background: url('/wp-content/uploads/2020/09/squared.jpg'); transform: rotate(0deg);">
          <div id="inserta_imagenlabel" style="opacity: 0;"><img alt=""
                  src="https://www.resumemaker.online/img/icon_image.svg">SELECT YOUR PICTURE
          </div>
      </div>
  </label>
  <input type="file" id="inputfoto2" style="display:none" accept="image/*">
  </li> -->
  <li class="li100" id="nombre_cont">
      <div><span></span>
          <div class="centradovertical" id="centrado_nombre">
              <p class="nombre color text-center" contenteditable="false" placeholder="Your name" id="nombre" style="color: rgb(255, 72, 40);"> ${data.name} </p>
              <p class="titulo1 text-center" contenteditable="false" placeholder="Your profession or speciality" id="titulo" style="display: block;">
                  ${data.title}
              </p>
              <div class="contact-top">
                  <table id="table" style="width:100%; table-layout: fixed;">

                      <tbody>
                      <tr>
                          <td style="text-align: right;">
                              <a href="tel:+84${data.phone}">
                                  <p class="texto" contenteditable="false" placeholder="Enter your phone number" style="display: contents;">
                                      ${data.phone}    
                                  </p>
                                  <i class="bi bi-telephone-fill"></i>
                              </a>
                          </td>
                          <td width="15px">
                              <i class="bi bi-grip-vertical"></i>
                          </td>
                          <td>
                              <a href="mailto:${data.email}">
                                  <i class="bi bi-envelope-fill"></i>
                                  <p class="texto" contenteditable="false" placeholder="Enter your email" style="display: contents;">
                                      ${data.email}
                                  </p>
                              </a>
                          </td>
                      </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  </li>
  `
}

function createWorkExperienceHtml(data) {
  // filter exp that have exp.type === 'Work' and exp.company === true
  return data.workExperience.filter(exp => exp.type === 'Work' && exp.company).map((exp) => {
    return `
    <div class="cuadro ui-state-default">
        <div style="position:relative">
            <div class="timeline_bola color_estrellas" style="background: rgb(255, 72, 40);"></div>
            <p class="titulo2 color" contenteditable="false" placeholder="Position" style="color: rgb(255, 72, 40);">${exp.position}</p>
        </div>
        <p class="titulo3" contenteditable="false" placeholder="Employer">${exp.employer}</p>
        <p class="fecha" contenteditable="false" placeholder="From - Until">${exp.date}</p>
        <p class="texto break-wrapper" contenteditable="false">
            ${exp.description.map((d) => `<span class="break-print">${d}</span><br>`).join('')}
        </p>
        // get children of exp, exp.children is an array of id of exp
        // get the exp from data.workExperience that have id in exp.children
        <div class="children-project">
          ${exp.children ? exp.children.map((child) => {
            childExp = data.workExperience.find(e => e.id === child)
            return `
            <div class="cuadro ui-state-default">
                <div style="position:relative">
                    <div class="timeline_bola color_estrellas" style="background: rgb(255, 72, 40);"></div>
                    <p class="titulo2 color" contenteditable="false" placeholder="Position" style="color: rgb(255, 72, 40);">${childExp.position}</p>
                </div>
                <p class="titulo3" contenteditable="false" placeholder="Employer">${childExp.employer}</p>
                <p class="fecha" contenteditable="false" placeholder="From - Until">${childExp.date}</p>
                <p class="texto break-wrapper" contenteditable="false">
                    ${childExp.description.map((d) => `<span class="break-print">${d}</span><br>`).join('')}
                </p>
                <div class="timeline_linea"></div>
            </div>
            `
          }).join('') : ''}
        </div>
        <div class="timeline_linea"></div>
    </div>
    `
    }
).join('')
}

function createFreelanceExperienceHtml(data) {
  // filter exp that have exp.type === 'Work'
  return data.workExperience.filter(exp => exp.type === 'Freelance').map((exp) => {
    return `
    <div class="cuadro ui-state-default">
        <div style="position:relative">
            <div class="timeline_bola color_estrellas" style="background: rgb(255, 72, 40);"></div>
            <p class="titulo2 color" contenteditable="false" placeholder="Position" style="color: rgb(255, 72, 40);">${exp.position}</p>
        </div>
        <p class="titulo3" contenteditable="false" placeholder="Employer">${exp.employer}</p>
        <p class="fecha" contenteditable="false" placeholder="From - Until">${exp.date}</p>
        <p class="texto break-wrapper" contenteditable="false">
            ${exp.description.map((d) => `<span class="break-print">${d}</span><br>`).join('')}
        </p>
        <div class="timeline_linea"></div>
    </div>
    `
    }
).join('')
}
  
function createEducationHtml(data) {
  return data.education.map((edu) => {
    return `
    <div class="cuadro ui-state-default">
        <div style="position:relative">
            <div class="timeline_bola color_estrellas" style="background: rgb(255, 72, 40);"></div>
            <p class="titulo2 color" contenteditable="false" placeholder="Degree" style="color: rgb(255, 72, 40);">${edu.degree}</p>
        </div>
        <p class="titulo3" contenteditable="false" placeholder="School">${edu.school}</p>
        <p class="fecha" contenteditable="false" placeholder="From - Until">${edu.date}</p>
        <div class="timeline_linea"></div>
    </div>
    `
    }
).join('')
}

function createSkillsHtml(data) {
  return data.skills.map((skill) => {
    return `
    <div class="inline-block-holder ${skill.extraclass || ''}">
      <p class="titulo1 titulo2" id="skill-${skill.category}" contenteditable="false" placeholder="${skill.name}">
          ${skill.name}
      </p>
      <div class="prog-box">
          ${skill.items.map((item) => {
              return `
              <div class="prog-item sortable" draggable="true">${item}</div>
              `
          }).join('')}
      </div>
    </div>
    `
    }
).join('')
}

function createCertificationsHtml(data) {
  return `
    <p class="titulo1 " contenteditable="false" 
      placeholder="${data.certifications.title}"
      style="justify-content: space-between">
      <a href="${data.certifications.link}" 
        target="_blank" title="${data.certifications.description}">
          ${data.certifications.title.toUpperCase()} &nbsp;
          <i class="bi bi-arrow-right-circle-fill red-color" style="vertical-align: top"></i>
      </a>
    </p>
    <div id="otros" class="sortable">
      ${data.certifications.items.map((cert) => {
        return `
        <a href="${cert.link}" target="_blank">
            <div class="cuadro myset ui-state-default">
                <div class="certi-img"><img draggable="false" alt="" class="color_estrellas" src="${cert.image}" style="background: rgb(255, 72, 40);"></div>
                <p class="titulo3 certi-text" contenteditable="false" placeholder="Item">${cert.name}</p>
            </div>
        </a>
        `
      }).join('')}
    </div>
  `
}

function createPortfoliosHtml(data) {
  return `
  <p class="titulo1 contact_title" contenteditable="false" 
    placeholder="Portfolios">
    Portfolios
  </p>
  ${data.portfolios.map((portfolio) => {
    return `
    <div class="contacto_item sortable" draggable="true" id="${portfolio.type.toLowerCase()}" style="display: block;">
        <a href="${portfolio.link}" target="_blank">
            <p class="texto" contenteditable="false" placeholder="${portfolio.type}">
              <i class="bi ${portfolio.icon} red-color icon-left"></i> ${portfolio.name}
        </a>
    </div>
    `
  }).join('')}
  `
}

// function getDurration(start, end) {
//   const startDate = new Date(start)
//   const endDate = new Date(end)
//   const years = endDate.getFullYear() - startDate.getFullYear()
//   const months = endDate.getMonth() - startDate.getMonth()
//   return `${years} years ${months} months`
// }

// Function to determine which JSON file to load based on the current route
function getDataFilePath() {
  const path = window.location.pathname;
  
  // Remove leading and trailing slashes, then split by '/'
  const pathSegments = path.replace(/^\/+|\/+$/g, '').split('/').filter(segment => segment !== '');
  
  // If no path segments or root path, use default
  if (pathSegments.length === 0 || path === '/') {
    return 'common/data/shawnsavour.json';
  }
  
  // Use the last segment as the filename
  const lastSegment = pathSegments[pathSegments.length - 1];
  return `common/data/${lastSegment}.json`;
}

window.onload = function () {
  const dataFilePath = getDataFilePath();
  
  fetch(dataFilePath).then(response => {
      if (!response.ok) {
        // If the specific file doesn't exist, fall back to default
        console.warn(`File ${dataFilePath} not found, falling back to default`);
        return fetch('common/data/shawnsavour.json');
      }
      return response;
  }).then(response => {
      return response.json()
  }).then(data => {
      document.title = `Shawn | ${data.title}`;
      if (data.perfil) document.querySelector('#perfil').innerHTML = createPerfilsHtml(data)
      if (data.name || data.title) document.querySelector('#contimprimir #section-intro').innerHTML = createIntroHtml(data)
      if (data.skills) document.querySelector('#section-skills').innerHTML = createSkillsHtml(data)
      if (data.certifications) document.querySelector('#section-certifications').innerHTML = createCertificationsHtml(data)
      if (data.portfolios) document.querySelector('#section-portfolios').innerHTML = createPortfoliosHtml(data)
      if (data.workExperience) {
        document.querySelector('#experiencialaboral').innerHTML = createWorkExperienceHtml(data)
        document.querySelector('#freelance').innerHTML = createFreelanceExperienceHtml(data)
      }
      if (data.education) document.querySelector('#section-educations').innerHTML = createEducationHtml(data) 
  })
}

function printDiv() {
  let printContents = document.getElementById('wrapper').innerHTML;
  let originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  document.body.classList.add('print-setting');
  setTimeout(function () {
      window.print();
  }, 1000);
  setTimeout(function () {
      document.body.innerHTML = originalContents;
      document.body.classList.remove('print-setting');
  }, 5000);
} 