import React from "react";
import './Bloogs.css';

const Bloogs = () => {
  return (
    <div className="container overflow-hidden mb-4">
  <div className="row gy-5">
    <div className=" col-12 col-md-6">
    <div className=" p-3  rounded-3">
            <h2>Q1. Difference between javascript and nodejs.</h2>
            <p>
              JavaScript is a simple programming language that runs in any
              browser JavaScript Engine. Whereas Node JS is an interpreter or
              running .. JavaScript is basically one standard defining
              programming language; it can run any browser with a default
              browser running environment. It is a very strong language normally
              used for a web application on any verification or any specific
              business logic.Node.js also holds a lot of relative libraries,
              which we normally use in javascript for general purpose
              programming language. It is actually a kind of environment or
              interpreter that can represent JavaScript or run any javascript
              program.
            </p>
          </div>
    </div>
    <div className="blogs col-12 col-md-6">
    <div className=" p-3  rounded-3">
            <h2>Q2.When should you use nodejs and when should you use mongodb</h2>
            <p>
            Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.
            </p>
          </div>
    </div>
    <div className="blogs col-12 col-md-6">
    <div className=" p-3  rounded-3">
            <h2>Q3.Differences between sql and nosql databases.</h2>
            <p>
            SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries.A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store.
            </p>
          </div>
    </div>
    <div className="blogs col-12 col-md-6">
    <div className=" p-3  rounded-3">
            <h2>Q4. What is the purpose of jwt and how does it work</h2>
            <p>
            JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
            </p>
          </div>
    </div>
  </div>
</div>
  );
};

export default Bloogs;
