# randomGenerator
The main objective of this project is to design and develop a web-based application allowing the generation of random and independent test case inputs. The suggested solution offers the software tester the ability to specify a set of parameters that the generated inputs would have to respect,  mainly the data type of inputs: be it JSON files, CSV files, or simply strings, number of elements to generate, the vocabulary to use, plus a possibility to use a BNF notation to specify the grammar to be followed. Additionally, the tool can be accessed either by a friendly user interface, or through an Application Programming Interface (API).

First and foremost, in order to use our application, running the web server is required. To do that, either by using the command line to the windows explorer, start by opening the project folder.
The next step is to open the command line and run the server using the following
command:
# > Node server.js
This will automatically launch the server which will be passively waiting under
the port 4600.
