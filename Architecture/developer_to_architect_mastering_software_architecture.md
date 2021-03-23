# Developer to Architect: Mastering Software Architecture #

## Introduction ##
### Introduction to Developer to Architect ###
1. How do you architect a new system?
	1. Starting with:

			Use cases
			DB Schema
			Code flow (sequence diagram)
			Class diagram
			
		1. Next step:

				user interface <-> web application <-> business service <-> database
				
			1. 3-tier or n-tier architecture
		2. Next step:
			1. Technologies and languages for implementation
				1. HTML/CSS/JS
				2. PHP
				3. Python
				4. C#
				5. Java
				6. Spring
				7. SQL
	2. We have not done any architect's job here
		1. We have never dealt with system requirements
			1. We must not just satisfy functional requirements but non-functional and system requirements (most importantly)
				1. Performance
					1. 90% of requests should be satisfied within a second
						1. To minimise latency
						2. Increase throughput
				2. Scalability
					1. System should be able to handle 1M simultaneous users
				3. Reliability
					1. How to make system resilient to failures
						1. If component has failed
						2. If data centre has failed
				4. Security
					1. How to securely transfer data
					2. How to securely store data
					3. How to authenticate and authorize
					4. What steps to take to secure our system against external and internal threats
				5. Deployment
					1. These systems are not easy to deploy (might require a lot of automation and coordination with operations team) - Due to high scalability and reliability
						1. There could be many components
						2. There could be many instances of the components
				6. Technology Stack
					1. For each layer and component
						1. Which platform or product to choose
							1. DBs
							2. Caches
							3. Queues
							4. Servers
					2. The options are chosen based on requirements of a system
						1. Performance, scalability, reliability, security, deployment requirements
					3. Products or technologies or platforms that satisfy those requirements are chosen
		2. The course is about non-functional and system requirements

## Performance ##
### Module Contents Overview ###
1. High level topics
	1. Understanding Performance
		1. Performance problems
		2. Measurement
		3. Principles
			1. The performance of a system depends on
	2. How to improve the performance of a system?
		1. Latency (How to minimize it) - Following are categories
			1. CPU - maximization
			2. Memory - minimize mem related latency
			3. Network - minimize network related latency
			4. Disk - improve utilization and minimize latency
		2. Concurrency (How to improve throughput)
			1. Locking - role played in terms of improving or degrading performance
				1. Pessimistic - where to use
				2. Optimistic - where to use
			2. Coherence - role played in terms of improving or degrading performance
		3. Caching
			1. Static Data - how to cache, challenges, how it helps us
			2. Dynamic Data - how to cache, challenges, how it helps us

### A Reference Software System for Discussing Performance ###
1. Sample System - we want to improve the performance of this system

		Web browser -SSL/TLS-> Web Application -objects-> Business App
				Pages/JSON/XML/Images
				
		Business App -Txn Data-> Database <-Report Data- Bach Processing
		
	1. Web application - accessible from web browser
	2. Web application - fetches data from a service (business application)
		1. It can be SOA
		2. It can be microservices
	3. Business application - fetches data from database
		1. Assuming database is RDBMS
	4. Back Processing - fetches data from database, processes it and puts the data back into database

### What is Performance ###
1. Performance - of software system
	1. Measure of how fast or responsive a system is under
		1. A given workload (this has to be fixed)
			1. Backend data
			2. Request volume
		2. A given hardware (this has to be fixed)
			1. Kind
			2. Capacity
	2. If we have system with huge data, that system is likely to face more performance problems compared to when we reduce the data that is there on the backend
	3. If request volume is high, the system is likely to face more performance problems
	4. This constraint is application only when we measure performance
	5. If we use superiod hardware or increase capacity of hardware
		1. Performance problems generally go away and system responds better
			1. If hardware was the reason behind any performance problems
2. Goals:
	1. Web requests
		1. How fast are we getting response
	2. Batch processing
		1. How fast the batch processes are finishing
3. Goal
	1. As we increase the workload, our performance should remain stable
		1. It should not severely degrade
			1. A little is okay (depends)
4. Hardware
	1. If we increase capacity or bring superior one
		1. System performance should improve (if it was lagging behind because of inadequate capacity or kind)

### How do Performance Problems Look Like ###
1. Performance Problems
	1. How to spot a performance problem?
	2. How does performance problem look like?
	3. How to get rid of all performance problems?
		1. We don't want them
2. Every performance problem is the result of some queue building up somewhere. (requests get queued up somewhere)
	1. Network socket queue
		1. Congestion
	2. DB IO queue
		1. Congestion
			1. A lot of requests are going to DB but it cannot respond immediately
	3. OS run queue
		1. How much CPU is available
		2. How many threads the system is able to run on the CPU(s)
		3. Congestion
			1. Too many threads
	4. ...
3. Reasons for queue build-up
	1. Inefficient slow processing
		1. Slow algorithm - inefficient code
	2. Serial resource access
		1. If only one thread needs to be executed at a time
			1. Deposit or withdraw of money
				1. All other threads should wait for the thread to finish
					1. Queue builds up
	3. Limited resource capacity
		1. Suppose we are able to execute requests in parallel
			1. We have limited number of CPUs
				1. Analogy: Traffic
					1. If we have 6 lanes instead of 2 lanes (more vehicles can pass at any given time)
4. Analogy
	1. Traffic jam
		1. There is a bottlenect somewhere - reason can be anything
5. Why is there a queue build up?
	1. Classification
6. Goal:
	1. To identify where the queue build up is happening
		1. If we can do that, we can fix the performance problem
	2. If we are architecting or building a new system
		1. We should focus on identifying the areas where this queue building can happend and try to avoid that
			1. Ensures that we have architected a system which is less likely to face any performance problems

### Performance Principles ###
1. Focus:
	1. Efficiency (improve it)
		1. Efficient Resource Utilization
			1. IO - Memory, Network, Disk
			2. CPU
		2. Efficient Logic
			1. Algorithms
			2. DB Queries
		3. Efficient Data Storage
			1. Data Structures
			2. DB Schema
		4. Caching
	2. Concurrency (increase it)
		1. Hardware
		2. Software
			1. Queueing
			2. Coherence
	3. Capacity (increase it)
2. Request types
	1. Serial requests - are processed one after another (only one request exists in the system)
		1. request goes in and response comes out
		2. Second request goes after first response
		3. ...
		4. **Efficiency is considered (single request processing)**
			1. How fast a single request gets processed in a system largely depends on the code that is executing the request
				1. Capacity: Kind of hardware
					1. We can keep this constant
			2. How efficient the code that is executing the request is governs the performance
				1. **Efficient Resource Utilization**
					1. IO, CPU
				2. **Efficient Logic** - it must use minimal amount of CPU and memory and IO (minimal work) - architect is not concerned about here
					1. Algorithms
					2. DB Queries
				3. **Efficient Data Storage**
					1. Data Structures - maps for search (instead of lists)
					2. DB Schema - indexing for search and it must be used by query
				4. **Caching** (architectural concern)
					1. It needs minimal code changes and it leads to phenomenal amount of performance improvement
			3. The above areas ensure that the response time of requests being processed serially will come down drastically (depends on efficiency)
	2. Concurrent requests - at any given time there can be multiple requests present in our system
		1. They are either processed simultaneously or serially
			1. Serial processing: Locking enforces it
		2. **We consider only concurrency and not efficiency**
		3. Concurrency is about executing multiple requests simultaneously in a system
			1. **Hardware** - It should allow our requests to be processed simultaneously
			2. **Software** - We need to code for the hardware that allows simultaneous request processing
				1. Here we don't have to be concerned about intrinsic inefficiencies within a single request (it has already been taken care of previously)
				2. Factors purely related to concurrency:
					1. **Queuing**
						1. It results from multiple requests being simultaneously present on a machine
							1. Not due to external call
						2. Blocking is because of other requests
							1. They are occupying resources (that are required by other requests and are not available)
					2. **Coherence**
	3. Capacity
		1. If we bring in better kind of hardware or increase the hardware - it can help with performance
			1. Capacity augmentation
				1. CPU
				2. Memory
				3. Disk
				4. Network
		2. Not the focus of this course
			1. Mention would be made if it can solve certain problems
				1. Identifying when this is relevant and not the other concepts (efficiency, concurrency)

### System Performance Objectives ###
1. Objectives
	1. Minimize Request-Response Latency
		1. Latency is Measured in Time Units
			1. How much time a request/ response spends within a system
				1. When it goes through, it spends time at different points in a system for processing
				2. When it goes through, it spends time waiting to be processed
			2. Total latency = wait time + processing time
				1. We are trying to minimize
					1. Wait time
					2. Processing time
		2. Depends on
			1. Wait/Idle Time
			2. Processing Time
	2. Maximize Throughput (this is our goal)
		1. Throughput is measured as Rate of Request procesing
		2. Depends on
			1. Latency - (minimizing this can increase throughput)
			2. Capacity - (increasing this can also increase throughput)
				1. This is important
2. Example: 
	1. Web-application - needs low latency
		1. Takes a request and gives response
		2. This also need throughput
	2. Batch processing - report generation say (read and write to db or file)
		1. We don't worry about request-response latency
		2. Throughput is important
3. Architect needs to learn
	1. How to bring down latency of a system - more important to focus on
		1. Capacity is next

### Performance Measurement Metrics ###
1. Metrics to measure to know the performance of a system (4 most important metrics)
	1. Latency
		1. Affects - User Experience
			1. Important
		2. Desired - As low as possible
	2. Throughput
		1. Affects - Number of users that can be supported
			1. Higher the throughput, higher the number of requests that can be supported
		2. Desired - Greater than the request rate
			1. It should be at-least higher than the peak number of users to be supported
	3. Errors (% of errors)
		1. Affects - Functional Correctness
		2. Desired - None
			1. Errors should only be related to performance - usually only timeouts
				1. Usually happens if we subject our system to very heavy workload
			2. It is not okay to have functional errors
				1. The solution cannot be used in production
	4. Resource Saturation
		1. Affects - Hardware capacity required
			1. Tells us how much capacity is completely utilized
				1. 100% CPU utilization
				2. Network is completely choked
			2. These are indications of resource saturation
			3. Unless we saturate the hardware we will not come to know if the hardware is overutilized or underutilized
				1. Based on this analysis, we can decide to whether augment the capacity or take away the capacity
		2. Desired - Efficient utilization of all system resources
		3. Tail latency - it is an indication of queuing of requests
			1. Gets worse with higher workloads
				1. Latency is key to performance exercise
				2. We need to pay attention to tail latency
					1. Y - axis - number of requests
					2. X - axis - latency
					3. Tail latency - small percentage of requests with high latency (tail through)
						1. 12000 milliseconds
						2. from 99 percentile - 1 % of requests have more than 4000 ms
							1. Every 100th request can experience a latency of more than 4000 ms (upto 12000 ms)
								1. Every 100th user might face this latency
									1. If this kind of latency for users is not acceptable, we need to pay attention to tail latency
										1. Say: 99% should be below 3000 ms
								2. Last percentile can be important to business
						3. If we increase the workload, then tail latency might become worse - more requests might shift to the right side
							1. It is worsening of performance problem
								1. Because of queuing of requests (because of other requests, they did not get queued)
						4. This measure can be a good indication of what does increase in workload do to our system
		4. Average latency hides the effects of tail latency
			1. Also measure 99 (or 99.9 - if required by business) percentile latency

### Serial Request Latency ###
1. Efficiency - related to serial request latency

### Network Transfer Latency ###
1. Two kinds of networks
	1. Browser and Web app
		1. Internet can be involved
			1. There could be multiple hops
			2. There could be multiple networks
			3. Some of the networks might not be:
				1. Fast
				2. Reliable
			4. They could be long distance in general and many networks might be involved
		2. Intranet
			1. Pretty reliable - may not be 100% reliable (better than internet)
			2. Fast (as compared to internet)
			3. Communication can be different as compared to browser to web-application
2. Sources of latency
	1. Any network is connected by wires and data phyisically travels by wires
		1. Data to reach from point A to point B - latency is involved 
			1. It is called as data transfer latency
				1. Different for internet as compared to intranet (global, regional, local network)
	2. Creation of connections
		1. TCP Connections
			1. UDP - much faster but unreliable - it is not discussed here
				1. Reliability has to be built into application
			2. Client has to first initiate a connection
				1. For that, if HTTP protocol is used - it is on top of TCP
					1. Overhead with TCP connection:
						1. Client initiates TCP connection
							1. Sends a TCP packet to server
								1. 50 ms say
						2. Server establishes connection
						3. Server sends acknowledgement to client
							1. 50 ms say
						4. Client also establishes connection, sends acknowledgement + data to server
						5. Total roundtrip time: 50 ms + 50 ms = 100 ms per connection
						6. Each subsequent request and response (if connection is already established) will take 100 ms
						7. Total communication time: 200 ms (100% overhead for connection creation)
					2. Overhead with SSL/TLS Connection
						1. Client communication will be over SSL usually
						2. Even intranet communication will be over SSL (if banking application)
						3. Steps
							1. Client initiates TCP connection (TPC SYN)
							2. Server sends acknowledgement (TCP SYN ACK)
							3. Client also sends TCP acknowledgement (TCP ACK)
							4. Client initiates SSL connection (SSL Client Hello)
							5. Server sends acknowledgement (SSL Server Hello)
							6. Client sends key (SSL Key Exchange)
							7. Server sends encyption parameters (SSL Change Cipher)
						4. Time taken for SSL connection: 300 ms
						5. Actual request/response roundtrip time
							1. 100 ms
						6. Total time: 300 ms + 100 ms = 400 ms
							1. Overhead: 300%

### Minimizing Network Transfer Latency ###
1. Approaches to address latencies
	1. Client -> Server: SSL/TLS connection over HTTP
	2. Web application -> REST API: HTTP
	3. REST API -> DB: DB specific protocol or HTTP - it is also over TCP
2. Stategy to reduce connection overhead
	1. Connection pool: Connection is created and pooled
		1. Re-using connections already created
			1. To avoid connection creation latency
				1. We cannot do anything about the latency
		2. Examples:
			1. Business application will have a connection pool for DB
			2. Web application will have a connection pool of HTTP connections to business applications
	2. Persistent Connections: External client (browser) to web application
		1. We don't have to do anything
			1. HTTP 1.1 protocol will make persistent connections
				1. The connection is not destroyed just after one call
				2. It keeps the connection for a while
					1. 5 - 6 consecutive calls - can be done over same connection (if not doing them in parallel)
				3. If client library is used for HTTP
					1. We need to ensure that client is making persistent connection
					2. example: microservices
						1. client libraries should use consistent connections
	3. **Caching**: Data transfer overhead
		1. Reduce size of data
		2. No transfer at all (avoid transfer that is not required) - cache the data
		3. Example: If HTTP service is querying DB (if data doesn't change frequently)
			1. **Data Caching**: Cache the data
		4. Example: Web app
			1. If user data needs to be stored in a session
				1. **Session Cache**: We can use session cache
		5. Browser side
			1. **Static Data Caching** - JS, images, CSS files
		6. Wherever there is an opportunity to cache data, we would cache (to avoid data transfer)
	4. **Data Format & Compression**: Efficient data formats can be used
		1. Intranet: Binary protocols can be used
			1. Instead of using HTTP - uses ASCII characters
				1. We can use RPC based protocol
					1. Examples: **gRPC**, Thrift, IIOP (old days - EJB)
				2. To make data transfer overhead minimal
				3. Cons:
					1. Reduces interoperability between applications
						1. RESTful - needs HTTP to promote inter-operability
				4. If inter-operability is not required, we can use other protocols instead of HTTP based
					1. RPC based (to overcome network data transfer related overheads)
		2. **Compression**: We should always do
			1. Server should compress the data using Zip format say
				1. It reduces size of data (reduces data transfer overhead)
				2. Cons: overhead of compression and uncompression (on client side)
			2. Client can also compress and server can uncompress
				1. Needs some CPU cycles
					1. Pros: This overhead is not that significant as compared to data transfer overhead
	5. **SSL Session Caching**
		1. If repeated SSL connection are created between client and server
			1. Data is exchanged between client and server
				1. Kinds of encryptions client supports
				2. Kinds of encryptions server supports
				3. Paremeters related to encryption (exchanged)
			2. Server can cache the parameters that client transfers to server (for server to identify the client)
				1. Server can take a shortcut to connect to client
					1. It reduces roundtrip for SSL connections
	6. If we use binary protocol for RESTful application, it will not remain a RESTful application
		1. Architecturally (technically it might be)
			1. Certain cases might not require strict RESTful applications

### Memory Access Latency ###
1. Memory Latency
	1. Finite Heap Memory
		1. Whether process is using heap or not
			1. A process can use only finite amount of heap memory
				1. Any process that tries to exceed the limit is bound to crash (problem to deal with)
		2. GC processes
			1. Java or .Net
				1. When process is about to go out of memory
					1. GC will run (aggressively)
						1. Performance will go down (may be drastically)
							1. Users might experience bad performance
	2. Large Heap Memory
		1. If a process occupies large heap memory
			1. It might be ocupying more than what is physically on the machine
		2. It might be bigger than physical memory
			1. OS might have to use hard disk to accomodate that much of extra heap memory
				1. Swapping (between physical memory and hard disk)
					1. Severely brings down the performance
		3. Even if physical memory is huge (to accomodate large heap size)
			1. Problem: Especially with those systems using GC
				1. GC has to do more work
					1. It has to sweep through large areas to clear objects no longer utilised
						1. It slows down GC algorithm
							1. Impacts performance of a system
		4. Large heap size need to be watched out for
	3. GC Algorithm
		1. Different flavors are used
			1. Each algorithms specializes for a given situation
				1. We need to identify the situation and apply appropriate GC algorithm
					1. Or else it might impact performance if dealing with large data
	4. Finite Buffer Memory - On DB side
		1. Any read/ write ops happening on DB, it happens in memory
			1. DB reads record from HDD to memory
			2. The record will be changed in memory
			3. The record is then written back to HDD
		2. Space utilization of buffer memory is critical
			1. It governs how many ops per second we can do
				1. Impacts throughput of DB
		3. If we are in shortage of buffer memory (may be due to poor memory allocation or inefficient schema)
			1. It will severly affect performance of entire system

### Minimizing Memory Access Latency ###
1. Approaches
	1. Avoid Memory Bloat
		1. Process should occupy as little memory as possible
			1. Code base
				1. If number of instructions are fewer
					1. The back and forth between ram and processor will be lesser
			2. Heap space
				1. As small as possible
					1. Lesser job for GC
					2. Chances of process going out of memory is lesser
			3. We can control the two as much as possible
				1. Unnecessary allocation
	2. Weak/ Soft References
		1. Useful where we are allocating large objects
			1. There is a chance of process going out of memory
				1. Solution: Weak or Soft References
					1. Java - this exists
						1. We can declare a reference as weak reference
							1. If runtime notices that process is running short of memory, it lets GC destroy the objects (weak references)
						2. Changes to program:
							1. It should check if the object still exists before referencing
	3. Multiple Smaller Processes
		1. This is better than one single process
			1. If a JVM process occupies huge memory (40 GB RAM say)
				1. RAM - 50 GB
			2. It is still not desirable
				1. It might be too much for GC algorithm to run efficiently
					1. GC can run really badly
		2. If we break the application into multiple processes, the work can be divided between processes
		3. Use cases:
			1. Batch process (for large amount of data)
				1. Multiple JVMs
				2. Multiple nodes
	4. Garbage Collection Algorithm
		1. many flavors are available
			1. Constantly researched and improved
		2. Broadly two kinds exist
			1. For batch processing - long pauses in-between (GC is done)
			2. For server processing - GC is run along with main process
				1. Pauses are small
		3. There is no GC available where there is no pause at all
			1. Process is stopped from doing work

### Disk Access Latency ###
### Minimizing Disk Access Latency ###
### CPU Processing Latency ###
### Minimizing CPU Processing Latency ###
### Some Common Latency Figures ###
### Concurrency Related Latency ###
### Amdahl's Law for Concurrent Tasks ###
### Gunther's Universal Scalability Law ###
### Shared Resource Contention ###
### Minimizing Shared Resource Contention ###
### Minimizing Locking Related Contention ###
### Pessimistic Locking vs Optimistic Locking ###
### Compare and Swap Mechanism ###
### Deadlocks ###
### Coherence Related Delays ###
### Caching ###
### System Architecture for Performance ###
### Caching for Performance ###
### HTTP Caching of Static Data ###
### Caching of Dynamic Data ###
### Caching Related Challenges ###

## Scalability ##
### Module Contents Overview ###
### Performance vs Scalability ###
### Vertical & Horizontal Scalability ###
### Reverse Proxy ###
### A Reference Software System for Discussing Scalability ###
### Scalability Principles ###
### Modularity for Scalability ###
### Replication ###
### Stateful Replication in Web Applications ###
### Stateless Replication in Web Applications ###
### Stateless Replication in Services ###
### Database Replication ###
### Database Replication Types ###
### Need for Specialized Services ###
### Specialized Services - SOAP/REST ###
### Asynchronous Services ###
### Asynchronous Processing & Scalability ###
### Caching for Scalability ###
### Vertical Partitioning with Micro-Services ###
### Database Partitioning ###
### Database Partitioning Selection ###
### Routing with Database Partitioning ###
### Methods for Horizontal Scalability ###
### Dealing with Large Scale Systems ###
### Load Balancing Multiple Instances ###
### Discovery Service and Load Balancing ###
### Load Balancer Discovery ###
### HLB vs SLB ###
### Layer-7 Load Balancer ###
### DNS as Load Balancer ###
### Global Server Load Balancer ###
### Global Data Replication ###
### Auto Scaling Instances ###
### Micro-Services Architecture ###
### Micro-Services Motivation ###
### Service Oriented Architecture ###
### Micro-Services Architecture Style ###
### Transactions in Micro-Services ###
### Compensating Tansactions - SAGA Pattern ###
### Micro-Services Communication Model ###
### Event Driven Transactions ###
### Extreme Scalability with NoSQL and Kafka ###

## Reliability ##
### Module Contents Overview ###
### Distributed Systems and System Failures ###
### Partial System Failures ###
### Reliability Engineering Topics ###
### Reliability ###
### Availability ###
### High Availability ###
### Fault Tolerance ###
### Designing Fault Tolerance ###
### Fault Tolerant Design ###
### Redundancy ###
### Types of Redundancy ###
### Single Point of Failure ###
### Stateless Component Redundancy ###
### Stateful Component Redundancy ###
### Load Balancer Redundancy ###
### Datacentre Infrastructure as SPOF ###
### Fault Detection ###
### Fault Models ###
### Health Checks ###
### External Monitoring Service ###
### Internal Cluster Monitoring ###
### Fault Detection in a System ###
### Recovering from Failures ###
### Stateless Component Recovery ###
### Load Balancer High Availability ###
### Database Recovery with Hot Standby ###
### Database Recovery with Warm Standby ###
### Database Recovery with Cold Backups ###
### High Availability in Large Scale Systems ###
### Failover Best Practices ###
### System Stability ###
### Timeouts ###
### Retries ###
### Circuit Breaker ###
### Fail Fast and Shed Load ###

## Security ##
### Module Contents Overview ###
### Security Objectives ###
### Network Security ###
### Symmetric Key Encryption ###
### Public Key Encryption ###
### Secure Network Protocol ###
### SSL and TLS ###
### Hashing ###
### Digital Signatures ###
### Digital Certificates ###
### Chain of Trust ###
### TLS/SSL Handshake ###
### Secure Network Channel ###
### Firewalls ###
### Network Security ###
### Identity Management ###
### Authentication and Authorization ###
### Authentication ###
### Credentials Transfer ###
### Stateful Authentication ###
### Stateless Authentication ###
### Single Sign-On Within a Network Domain ###
### Token Storage ###
### Authentication ###
### Access Management ###
### Role Based Access ###
### Role Based Access Example ###
### Authorization ###
### OAuth2 Token Grant ###
### OAuth2 Token Grant - Code Flow ###
### OAuth2 Token Grant - Password Flow ###
### JSON Web Tokens ###
### Common Vulnerabilities ###
### SQL Injection ###
### Cross Site Scripting ###
### Cross Site Resource Forgery ###

## Deployment ##
### Module Contents Overview ###
### Large Scale Deployments ###
### Application Deployment ###
### Infrastructure Deployment ###
### System Operations ###
### Modern Deployment Solutions ###
### Application Deployment ###
### Component Deployment ###
### Component Deployment Parts ###
### Provisioning and Configuration ###
### Virtual Machine Deployment ###
### Isolation Through Virtual Machines ###
### Docker Containers ###
### Infrastructure Deployment ###
### Deployment with Docker Containers ###
### Deployment with Containers on Cloud ###
### Deployment with Kubernetes ###
### Kubernetes Lifecycle Management ###
### Kubernetes Naming and Addressing ###
### Kubernetes Scaling with Multiple Instances ###
### Kubernetes Load Balancing ###
### Kubernetes High Availability ###
### Kubernetes Rolling Upgrades ###
### Kubernetes Capabilities ###
### Kubernetes Deployment ###
### Kubernetes Services and Workloads ###
### Kubernetes Architecture ###
### System Upgrades ###
### Rolling Updates ###
### Canary Deployment ###
### Recreate Deployment ###
### Blue Green Deployment ###
### A/B Testing ###

## Technology Stack ##
### Module Contents Overview ###
### Reference System for Using Tech Platforms ###
### Web Applications ###
### Solutions for Web Applications ###
### Apache Web Server ###
### Apache WebServer Architecture ###
### Apache WebServer Scalability ###
### Nginx WebServer ###
### Nginx Architecture ###
### Nginx as Reverse Proxy and Cache ###
### Web Containers & Spring Framework ###
### Jetty & Spring ###
### Node.JS ###
### Node.JS Event Loop ###
### Cloud Solutions for Web ###
### Cloud Storage ###
### Cloud CDN ###
### Services ###
### Services Solutions ###
### Memcached ###
### Memcached Architecture ###
### Redis Cache & Its Architecture ###
### Cloud Caching Solutions ###
### RabbitMQ ###
### RabbitMQ Architecture ###
### Kafka Architecture ###
### Redis Pub/Sub ###
### Cloud MQ Solutions ###
### Datastores ###
### Datastore Solutions ###
### RDBMS ###
### RDBMS Scalability Architecture ###
### NoSQL Objectives & Trade-Offs ###
### Amazon DynamoDB ###
### DynamoDB Architecture ###
### Google BigTable ###
### BigTable Architecture ###
### HBase ###
### Cassandra ###
### Cassandra Features ###
### MongoDB ###
### MongoDB Architecture ###
### Analytics ###
### Analytics Solutions ###
### Logstash Architecture ###
### Logstash Data Streaming Architecture ###
### Fluentd ###
### Elasticsearch ###
### Elasticsearch Architecture ###
### Hadoop HDFS ###
### Map-Reduce ###
### Apache Spark ###
### Stream Processing ###