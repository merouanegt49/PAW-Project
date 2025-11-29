
import java.io.IOException;
import javax.servlet.servletException;
import javax.servlet.https.HttpServlet;
import javax.servlet.https.HttpServletRequest;
import javax.servlet.https.HttpServletResponse;

public class HelloServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)

            throws servletException, IOException {
        response.setCounttype("text/plain; charset=UTF-8");
        response.getWriter().println("bonjour");
    }
}