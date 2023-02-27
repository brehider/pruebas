import React from 'react';
import './Footer.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <h4>Enlaces útiles</h4>
            <ul>
              <li><a href="#">Inicio</a></li>
              
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contacto</h4>
            <ul>
              <li><a href="#">Correo electrónico : brehider111@hotmail.com</a></li>
              <li><a href="#">Teléfono: 304 378 8558   </a></li>
              <li><a href="#">Dirección: Cr 45b #65-47 - villa hermosa la masion - Medellin,colombia</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Redes</h4>
            <div className="social-links">
            <a href="https://www.linkedin.com/in/brehider-palacios-palacio-768323237/" target={'_blank'} >  <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiMwMDc4ZDQiIGQ9Ik04LjQyMSwxNGgwLjA1MmwwLDBDMTEuMjYzLDE0LDEzLDEyLDEzLDkuNUMxMi45NDgsNi45NDUsMTEuMjYzLDUsOC41MjYsNVM0LDYuOTQ1LDQsOS41CUM0LDEyLDUuNzM2LDE0LDguNDIxLDE0eiBNNCwxN2g5djI2SDRWMTd6IE00NCwyNi41YzAtNS4yNDctNC4yNTMtOS41LTkuNS05LjVjLTMuMDUzLDAtNS43NjIsMS40NDYtNy41LDMuNjg0VjE3aC05djI2aDlWMjhsMCwwCWMwLTIuMjA5LDEuNzkxLTQsNC00czQsMS43OTEsNCw0djE1aDlDNDQsNDMsNDQsMjcuOTU1LDQ0LDI2LjV6Ij48L3BhdGg+Cjwvc3ZnPg=="/></a> 
            
            <a href="https://github.com/brehider" target={'_blank'} >  <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCA2NCA2NCI+CjxjaXJjbGUgY3g9IjMyIiBjeT0iMzIiIHI9IjIzIiBmaWxsPSIjOWMzNGMyIj48L2NpcmNsZT48ZWxsaXBzZSBjeD0iMzIiIGN5PSI2MSIgb3BhY2l0eT0iLjMiIHJ4PSIxOSIgcnk9IjMiPjwvZWxsaXBzZT48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMzIsMTRjMi41NzcsMCw0LjY3NC0xLjk1Nyw0Ljk0Ni00LjQ2MUMzNS4zNTIsOS4xOSwzMy42OTksOSwzMiw5CUMxOS4yOTcsOSw5LDE5LjI5Nyw5LDMyYzAsMS42OTksMC4xOSwzLjM1MiwwLjUzOSw0Ljk0NkMxMi4wNDQsMzYuNjc0LDE0LDM0LjU3NywxNCwzMkMxNCwyMi4wNzUsMjIuMDc1LDE0LDMyLDE0eiIgb3BhY2l0eT0iLjMiPjwvcGF0aD48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjMiIGQ9Ik0xNS4wNDcsMjMuNDI3YzEuODc4LTMuNjk5LDQuOTMyLTYuNzA1LDguNjY2LTguNTIyIj48L3BhdGg+PHBhdGggZmlsbD0iI2EwZWZmZSIgZD0iTTM3LjE4NCw0My4xMTFjNC41NTYtMS4wMiw3LjgxOC0zLjY0NSw3LjgxOC05LjI1MmMwLTIuNi0wLjc4Ny00LjU1Ni0xLjk3LTYuMDExCWMtMC4yNzMtMC4zMzYtMC4yNzQtMS4wNTYtMC4xNjItMS40NzRjMC4yODEtMS4wNDMsMC4wNjYtMi40MDQtMC4xNy0zLjM4M2MtMC4xNzctMC43My0wLjk0LTEuMTU2LTEuNjYyLTAuOTQ5CWMtMS43MDcsMC40OTEtMy4xMTUsMS40NjYtNC4xMzgsMi4xMzZjLTAuMjc5LDAuMTgyLTAuNjAyLDAuMjU1LTAuOTMxLDAuMjAzYy0xLjI0NC0wLjE5Ny0yLjU4MS0wLjI4Mi0zLjk2NC0wLjMwMkwzMiwyNC4xMTNWMjQuMDgJYy0xLjM4MywwLjAyLTIuNzIsMC4xMDUtMy45NjQsMC4zMDJjLTAuMzI5LDAuMDUyLTAuNjUyLTAuMDIxLTAuOTMxLTAuMjAzYy0xLjAyMy0wLjY2OS0yLjQzMS0xLjY0NC00LjEzOC0yLjEzNgljLTAuNzIxLTAuMjA4LTEuNDg1LDAuMjE5LTEuNjYyLDAuOTQ5Yy0wLjIzNywwLjk3OS0wLjQ1MSwyLjM0MS0wLjE3LDMuMzgzYzAuMTEzLDAuNDE4LDAuMTEyLDEuMTM4LTAuMTYyLDEuNDc0CWMtMS4xODMsMS40NTUtMS45NywzLjQxLTEuOTcsNi4wMTFjMCw1LjYwNywzLjI2MSw4LjIzMiw3LjgxOCw5LjI1MmMwLjc3NCwwLjE3MywwLjg0MywxLjAxOCwwLjU0NCwxLjc1MwljLTAuMjM2LDAuNTgyLTAuMzY4LDEuMDA5LTAuMzY4LDEuNjc3djAuMzE1Yy0wLjE2OCwwLjA0Ni0wLjM0MiwwLjA4Ny0wLjUzLDAuMTExYy0xLjE0MiwwLjE0Ny0xLjk4LDAtMi41NTktMC4zNDMJYy0wLjU4LTAuMzQzLTEuMjY3LTAuOTA5LTEuNzgzLTEuNjYyYy0wLjQzNS0wLjYzNS0xLjM3NS0yLjAwMy0zLjU5Ni0xLjk0OWMtMC4zODgtMC4wMS0wLjU2NSwwLjM1NC0wLjUxNiwwLjU4MQljMC4wNDQsMC4yLDAuMjIsMC41MTYsMC45MjQsMC43NzNjMC43MDYsMC4yNTksMS4xNjksMC43ODgsMS41NTYsMS40MTFjMC40MzEsMC42OTUsMC42OTMsMi4xNDMsMi4xOTYsMy4yMTgJYzAuOTAxLDAuNjQ0LDIuMDc4LDEuMDM2LDIuOTU0LDAuOTk2YzAuNzQyLTAuMDM0LDEuMzU1LDAuNTc0LDEuMzU1LDEuMzE3bDAuMDAxLDEuNjI4YzAsMC42NTktMC42MDMsMS4zMjYtMS4yMjgsMS4yMQljMS44NTQsMC42MjQsNC4xMjksMC44MTMsNi4yMjksMC44NHYtMC4wNDdsMC4wMDUsMC4wNDdjMi4xLTAuMDI2LDQuMzc1LTAuMjE2LDYuMjI5LTAuODRjLTAuNjI1LDAuMTE1LTEuMjI4LTAuNTUyLTEuMjI4LTEuMjEJbDAuMDAyLTYuMzk2YzAtMC42NjgtMC4xMzItMS4wOTUtMC4zNjgtMS42NzdDMzYuMzQyLDQ0LjEzLDM2LjQxLDQzLjI4NSwzNy4xODQsNDMuMTExeiI+PC9wYXRoPjxwYXRoIGQ9Ik01NC40NjEsMjcuMDU0QzUxLjk1NiwyNy4zMjYsNTAsMjkuNDIzLDUwLDMyYzAsOS45MjUtOC4wNzUsMTgtMTgsMTgJYy0yLjU3NywwLTQuNjc0LDEuOTU3LTQuOTQ2LDQuNDYxQzI4LjY0OCw1NC44MSwzMC4zMDEsNTUsMzIsNTVjMTIuNzAzLDAsMjMtMTAuMjk3LDIzLTIzQzU1LDMwLjMwMSw1NC44MSwyOC42NDgsNTQuNDYxLDI3LjA1NHoiIG9wYWNpdHk9Ii4xNSI+PC9wYXRoPgo8L3N2Zz4="/></a> 
 
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 pruebas</p>
      </div>
    </footer>
  );
}

export default Footer;
