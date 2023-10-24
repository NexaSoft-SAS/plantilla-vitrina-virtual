export default function Footer() {
  return (
    <>
      <footer className="border-top p-4">
        <div className="copyright text-center text-sm text-muted">
          © Copyright, todos los derechos reservados. 
          <script>
            document.write(new Date().getFullYear()) 
          </script>
          &nbsp;
          <a href="https://www.nexasoft.dev" className="text-secondary ms-1" target="_blank">NexaSoft SAS</a>.
        </div>
      </footer>
    </>
  );
}


