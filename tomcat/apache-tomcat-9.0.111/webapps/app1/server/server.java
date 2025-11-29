import java.net.Socket;

public class server {

    public static void main(String[] args) {

        while (true) {
            Socket clientSocket = serverSocket.accept();
        
            clientSocket.close();
        }
    }
}