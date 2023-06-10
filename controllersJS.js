document.write(
    `<div class="mainHoldingContainer">
    <nav class="navbar navbar-expand-lg" id="main_navbar">
        <div class="container-fluid">
            <a href="#" class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"
                    style=" display: flex; justify-content: center; align-items: center;"><i class="fa-duotone fa-bars"
                        style="color: white;"></i></span>
            </a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                            About Library
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="visandmis.html" id="avam">Vision and Mission</a></li>
                            <li><a class="dropdown-item" href="libcollections.html" id="alc">Library Collection</a>
                            </li>
                            <li><a class="dropdown-item" href="facultypublication.html" id="afp">Faculty
                                    publications(Books)</a></li>
                            <li><a class="dropdown-item" href="libcomittee.html" id="alco">Library Committee</a>
                            </li>
                            <li><a class="dropdown-item" href="openingHours.html" id="aoh">Opening Hours</a></li>
                            <li><a class="dropdown-item" href="rulesandreg.html" id="arar">Rules and Regulations</a>
                            </li>
                            <li><a class="dropdown-item" href="libraryteam.html" id="alt">Library Team</a></li>
                        </ul>
                    </li>


                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                            Services
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="genServices.html">General Services</a></li>
                            <li><a class="dropdown-item" href="#">Services for Persons with Disabilities</a></li>
                            <li><a class="dropdown-item" href="#">Document Delivery Service</a></li>
                            <li><a class="dropdown-item" href="#">New Arrivals</a></li>
                            <li><a class="dropdown-item" href="qrcodes.html">QR Code</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                            E-Resources
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="nlist.html">N-List</a></li>
                            <li><a class="dropdown-item" href="delnet.html">DELNET</a></li>
                            <li class="nav-item dropdown">
                                <a class="dropdown-item dropdown-toggle" href="#" role="button"
                                    data-bs-toggle="dropdown">
                                    NDL
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="ndl.html">NDL</a></li>
                                    <li><a class="dropdown-item" href="ndloic.html">National Digital Library Of India
                                            Club</a>
                                    </li>
                                    <li><a class="dropdown-item" href="#">NDLI club activities</a></li>
                                    <li><a class="dropdown-item" href="#">NDLI club certificates</a></li>
                                </ul>
                            </li>
                            <!-- <li class="nav-item dropdown">
                                <a class="dropdown-item dropdown-toggle" href="#" role="button"
                                    data-bs-toggle="dropdown">
                                    Subject Guides
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Resources for Researchers</a></li>
                                    <li><a class="dropdown-item" href="#">Civil Engineering</a></li>
                                    <li><a class="dropdown-item" href="#">Computer Science & Engineering</a></li>
                                    <li><a class="dropdown-item" href="#">Electrical Engineering</a></li>
                                    <li><a class="dropdown-item" href="#">Information Technology</a></li>
                                    <li><a class="dropdown-item" href="#">Computer science & Engineering(Data
                                            Science)</a></li>
                                    <li><a class="dropdown-item" href="#">Mathematics</a></li>
                                    <li><a class="dropdown-item" href="#">Physics</a></li>
                                    <li><a class="dropdown-item" href="#">Chemistry</a></li>
                                    <li><a class="dropdown-item" href="#">Science & Humanities</a></li>
                                </ul>
                            </li> -->
                            <li class="nav-item dropdown">
                                <a class="dropdown-item dropdown-toggle" href="#" role="button"
                                    data-bs-toggle="dropdown">
                                    Open Educational Resources
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item dropdown">
                                        <a class="dropdown-item dropdown-toggle" target="_blank" href="#" role="button"
                                            data-bs-toggle="dropdown">
                                            Open Access Directories
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" target="_blank"
                                                    href="https://doaj.org/">Directory of Open Access
                                                    Journals (DOAJ)</a>
                                            </li>
                                            <li><a class="dropdown-item" target="_blank"
                                                    href="http://www.opendoar.org/">Directory of Open
                                                    Access Repositories
                                                    (OpenDOAR)</a></li>
                                            <li><a class="dropdown-item" target="_blank"
                                                    href="https://www.doabooks.org/doab?func=browse&&uiLanguage=en">Directory
                                                    of Open Access
                                                    Books</a></li>
                                            <li><a class="dropdown-item" target="_blank"
                                                    href="http://www.oalib.com/">Open Access Library (OALib)
                                                </a>
                                            </li>
                                        </ul>
                                    </li>


                                    <li class="nav-item dropdown">
                                        <a class="dropdown-item dropdown-toggle" href="#" role="button"
                                            data-bs-toggle="dropdown">
                                            ETD Resources (e-Thesis)
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" target="_blank"
                                                    href="http://www.ndltd.org/">Networked Digital
                                                    Library
                                                    of Thesis and Dissertations (NDLTD)</a>
                                            </li>
                                            <li><a class="dropdown-item" target="_blank"
                                                    href="http://shodhganga.inflibnet.ac.in/">Shodhganga :
                                                    a reservoir of Indian Thesis</a></li>
                                            <li><a class="dropdown-item" target="_blank"
                                                    href="https://openknowledge.worldbank.org/">World
                                                    Bank:
                                                    Open Knowledge Repository</a></li>
                                            <li><a class="dropdown-item" target="_blank"
                                                    href="http://www.oalib.com/">Open Access Library
                                                    (OALib)</a></li>
                                        </ul>
                                    </li>


                                    <li class="nav-item dropdown">
                                        <a class="dropdown-item dropdown-toggle" href="#" role="button"
                                            data-bs-toggle="dropdown">
                                            E-Books
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" target="_blank"
                                                    href="https://engineeringbookspdf.com/#google_vignette">E-Book PDF
                                                    free</a></li>
                                            <li><a class="dropdown-item" target="_blank"
                                                    href="https://www.free-ebooks.net/engineering-textbooks">Free E text
                                                    Books for engineers</a></li>
                                            <li><a class="dropdown-item" target="_blank"
                                                    href="https://libguides.cbu.edu/subject/engineering">E
                                                    Books/Resources free</a></li>
                                            <li><a class="dropdown-item" target="_blank"
                                                    href="https://libguides.utoledo.edu/EngOpenAccess">LIB Guides (Free
                                                    E-Books)</a></li>
                                            <li><a class="dropdown-item" target="_blank"
                                                    href="http://www.ams.org/samplings/math-history/math-history">AMS
                                                    Free Online Books</a></li>
                                            <li><a class="dropdown-item" target="_blank"
                                                    href="https://bookboon.com/">Bookboon</a></li>
                                            <li><a class="dropdown-item" target="_blank"
                                                    href="http://www.doabooks.org/doab?uiLanguage=en">Directory of
                                                    Open Access Books (DOAB)</a>
                                            </li>
                                            <li><a class="dropdown-item" target="_blank"
                                                    href="https://www.intechopen.com/">INTECH Open
                                                    Access
                                                    Books</a></li>
                                            <li><a class="dropdown-item" target="_blank"
                                                    href="https://www.jstor.org/open/">JSTOR Open
                                                    Content</a></li>
                                            <li><a class="dropdown-item" target="_blank"
                                                    href="http://www.gutenberg.org/">Project
                                                    Gutenberg</a>
                                            </li>
                                        </ul>
                                    </li>





                                    <li class="nav-item dropdown">
                                        <a class="dropdown-item dropdown-toggle" href="#" role="button"
                                            data-bs-toggle="dropdown">
                                            E-Journals
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" target="_blank" href="dl.acm.org">ACM Digital
                                                    Library(few journals and proceedings)</a>
                                            </li>
                                            <li><a class="dropdown-item" target="_blank"
                                                    href="hindawi.com/journals">Hindawi Journals</a>
                                            </li>
                                            <li><a class="dropdown-item" target="_blank" href="open.ieee.org">IEEE
                                                    Open</a>
                                            </li>
                                            <li><a class="dropdown-item" target="_blank" href="doaj.org">Directory of
                                                    Open Access Journals (Open DOAJ))</a>
                                            </li>
                                            <li><a class="dropdown-item" target="_blank" href="#">CSIR-NIScPR(NISCAIR)
                                                    online periodical Repository</a>
                                            </li>
                                            <li><a class="dropdown-item" target="_blank" href="eurasip.org">The European
                                                    Association for Signal Processing (EURASIP) Journals</a>
                                            </li>
                                            <li><a class="dropdown-item" target="_blank"
                                                    href="iopscience.iop.org/journallist">Institute of Physics
                                                    electronic journals (IOP)</a>
                                            </li>
                                            <li><a class="dropdown-item" target="_blank"
                                                    href="omicsonline.org/openaccesss">OMICS International Open Access
                                                    Journals</a>
                                            </li>
                                            <li><a class="dropdown-item" target="_blank"
                                                    href="elsevier.com/open-access/open-access-journals">Elsevier Open
                                                    access Journals</a>
                                            </li>
                                            <li><a class="dropdown-item" target="_blank"
                                                    href="sciencedirect.com">Science Direct</a>
                                            </li>
                                            <li><a class="dropdown-item" target="_blank" href="emis.de/journals">The
                                                    Electronic Library of Mathematics</a>
                                            </li>
                                            <li><a class="dropdown-item" target="_blank"
                                                    href="http://www.biomedcentral.com/">BioMed
                                                    Central</a>
                                            </li>
                                            <li><a class="dropdown-item" target="_blank"
                                                    href="http://ccj.springeropen.com/">Chemistry
                                                    Central
                                                    Journal</a></li>
                                            <li><a class="dropdown-item" target="_blank"
                                                    href="http://www.niscair.res.in/ScienceCommunication/sci.asp?a=topframe.htm&&b=leftcon.asp&&c=ResearchJournals/rejour/rejour1.htm&&d=test">CSIR-NISCAIR
                                                    Journals</a></li>
                                            <li><a class="dropdown-item" target="_blank"
                                                    href="http://www.ias.ac.in/">Indian Academy of
                                                    Sciences</a></li>
                                            <li><a class="dropdown-item" target="_blank"
                                                    href="http://www.indmed.nic.in/medindlist.html">JSTOR
                                                    Open Content</a></li>
                                            <li><a class="dropdown-item" target="_blank"
                                                    href="http://www.medknow.com/">Medknow Journals</a>
                                            </li>
                                            <li><a class="dropdown-item" target="_blank"
                                                    href="https://www.plos.org/publications">PLOS
                                                    Journals</a></li>
                                            <li><a class="dropdown-item" target="_blank"
                                                    href="http://www.ncbi.nlm.nih.gov/pmc/">PubMed
                                                    Central</a></li>
                                        </ul>
                                    </li>


                            </li>
                            <li class="nav-item dropdown">
                                <a class="dropdown-item dropdown-toggle" href="#" role="button"
                                    data-bs-toggle="dropdown">
                                    E-Newspapers
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" target="_blank"
                                            href="http://e-paperview.in/">E-Paperview</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="dropdown-item dropdown-toggle" href="#" role="button"
                                    data-bs-toggle="dropdown">
                                    Free statistical Analysis Software
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" target="_blank" href="https://octave.org/">Free
                                            statistical Analysis Software</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="dropdown-item dropdown-toggle" href="#" role="button" target="_blank"
                                    data-bs-toggle="dropdown">
                                    E-Dictionary/Glossary
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" target="_blank"
                                            href="https://en.wikipedia.org/wiki/Glossary_of_engineering">Glossary of
                                            engineering</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="dropdown-item dropdown-toggle" href="#" role="button" target="_blank"
                                    data-bs-toggle="dropdown">
                                    MOOC Courses
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" target="_blank"
                                            href="https://www.coursera.org/">Coursera</a></li>
                                    <li><a class="dropdown-item" target="_blank"
                                            href="https://gian.iitkgp.ac.in/">Global Initiative of Academic Networks</a>
                                    </li>
                                    <li><a class="dropdown-item" target="_blank"
                                            href="https://www.udacity.com/">Udacity</a></li>
                                    <li><a class="dropdown-item" target="_blank"
                                            href="https://skillshare.com/">SkillShare</a></li>
                                    <li><a class="dropdown-item" target="_blank"
                                            href="https://www.edx.org/school/iimbx">IIM Bangalore online courses</a>
                                    </li>
                                    <li><a class="dropdown-item" target="_blank" href="https://www.edx.org/">EDX</a>
                                    </li>
                                    <li><a class="dropdown-item" target="_blank" href="http://udemy.com/">Udemy</a></li>
                                    <li><a class="dropdown-item" target="_blank"
                                            href="https://skill-lync.com/all-courses">Skill-Lync</a></li>
                                    <li><a class="dropdown-item" target="_blank"
                                            href="https://www.futurelearn.com/subjects/science-engineering-and-maths-courses/engineering">Future
                                            Learn</a></li>
                                    <li><a class="dropdown-item" target="_blank"
                                            href="https://www.classcentral.com/provider/swayam?subject=engineering">Swayam</a>
                                    </li>
                                    <li><a class="dropdown-item" target="_blank"
                                            href="https://www.classcentral.com/provider/mit-ocw">MIT OpenCourseWare</a>
                                    </li>
                                    <li><a class="dropdown-item" target="_blank"
                                            href="https://www.classcentral.com/providers">Other Courses</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="dropdown-item dropdown-toggle" href="#" role="button" target="_blank"
                                    data-bs-toggle="dropdown">
                                    Virtual Labs for Engineers
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" target="_blank" href="https://www.vlab.co.in">Virtual
                                            Labs</a></li>
                                    <li><a class="dropdown-item" target="_blank" href="#">E-Yantra</a></li>
                                    <li><a class="dropdown-item" target="_blank"
                                            href="https://virtuallabs.merlot.org/">MERLOT Virtual Labs</a></li>
                                    <li><a class="dropdown-item" target="_blank"
                                            href="http://library.csi.cuny.edu/oer/virtuallabs-simulations">CSI
                                            Library</a></li>
                                    <li><a class="dropdown-item" target="_blank"
                                            href="https://libguides.mines.edu/oer/simulationslabs">Simulations and
                                            Virtual Labs</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="dropdown-item dropdown-toggle" href="#" role="button" target="_blank"
                                    data-bs-toggle="dropdown">
                                    Mobile Apps for Engineers
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" target="_blank" href="#">AutoCAD 360</a></li>
                                    <li><a class="dropdown-item" target="_blank" href="https://mathpix.com/">Snip by
                                            MathPix</a></li>
                                    <li><a class="dropdown-item" target="_blank"
                                            href="https://play.google.com/store/apps/details?id=com.sshh.mechengtoolbox">Mechanical
                                            Engineering One</a></li>
                                    <li><a class="dropdown-item" target="_blank"
                                            href="https://apps.apple.com/al/app/fingercad/id364926834">FingerCAD</a>
                                    </li>
                                    <li><a class="dropdown-item" target="_blank"
                                            href="https://play.google.com/store/apps/details?id=com.wolfram.android.alpha&hl=en_US">Wolfram
                                            Alpha</a></li>
                                    <li><a class="dropdown-item" target="_blank" href="#">Graphing Calculator X84</a>
                                    </li>
                                    <li><a class="dropdown-item" target="_blank" href="#">Droid Tesla Pro</a></li>
                                    <li><a class="dropdown-item" target="_blank"
                                            href="https://play.google.com/store/apps/details?id=com.kruegersystems.circuitdroid&&hl=en">iCircuit
                                            Electronic Circuit Simulator</a></li>
                                    <li><a class="dropdown-item" target="_blank"
                                            href="https://apps.apple.com/gb/app/iengineer/id369825047">iEngineer</a>
                                    </li>
                                    <li><a class="dropdown-item" target="_blank"
                                            href="https://play.google.com/store/search?q=iEngineer&c=apps&hl=en">SoloLearn:
                                            Learn to code for free</a></li>
                                    <li><a class="dropdown-item" target="_blank"
                                            href="https://play.google.com/store/apps/details?id=com.ScientificMonkeyLLC.TrussMe&hl=en">TrussMe!</a>
                                    </li>
                                    <li><a class="dropdown-item" target="_blank"
                                            href="https://play.google.com/store/apps/details?id=com.boombitgames.BridgeLowpoly">Build
                                            a Bridge</a></li>
                                    <li><a class="dropdown-item" target="_blank"
                                            href="https://play.google.com/store/apps/details?id=com.keptaa.mustafiz.codesandstandards">Engineering
                                            Codes and Standards</a></li>
                                    <li><a class="dropdown-item" target="_blank"
                                            href="https://play.google.com/store/apps/details?id=com.keptaa.mustafiz.codesandstandards">Civil
                                            Engineering Books and Notes</a></li>
                                </ul>
                            </li>
                            <li><a class="dropdown-item" href="gate.html">GATE</a></li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="dropdown-item dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                            Others
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" target="_blank" href="https://egyankosh.ac.in/">E-Gyankosh</a>
                            </li>
                            <li><a class="dropdown-item" target="_blank" href="https://www.catalyst.org/">Catalyst</a>
                            </li>
                            <li><a class="dropdown-item" target="_blank" href="https://www.khanacademy.org/">Khan
                                    Academy</a></li>
                            <li><a class="dropdown-item" target="_blank" href="https://ocw.mit.edu/">MIT Open
                                    CourseWare</a></li>
                            <li><a class="dropdown-item" target="_blank" href="https://nopr.niscair.res.in/">NOPR</a>
                            </li>
                            <li><a class="dropdown-item" target="_blank" href="https://nptel.ac.in/">NPTEL</a></li>
                            <li><a class="dropdown-item" target="_blank" href="http://nroer.gov.in/welcome">NROER</a>
                            </li>
                            <li><a class="dropdown-item" target="_blank" href="https://www.oercommons.org/">OER
                                    Commons</a></li>
                            <li><a class="dropdown-item" target="_blank" href="https://oatd.org/">OATD</a></li>
                            <li><a class="dropdown-item" target="_blank"
                                    href="https://open.umich.edu/find/find-open-educational-resources">Open
                                    Michigan</a></li>
                            <li><a class="dropdown-item" target="_blank" href="https://openstax.org/">OpenStax</a>
                            </li>
                            <li><a class="dropdown-item" target="_blank"
                                    href="https://shodhganga.inflibnet.ac.in/">ShodhGanga</a>
                            </li>
                            <li><a class="dropdown-item" target="_blank" href="https://rarebooksocietyofindia.org">Rare
                                    Book Society
                                    of Indian</a></li>
                        </ul>
                    </li>
                </ul>
                <li class="nav-item">
                    <a class="nav-link" href="https://prmceam.irins.org/" target="_blank">IRINS @PRMCEAM</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Institutional Repository</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="events.html">Events</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="downloads.html">Downloads</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="faqs.html">FAQs</a>
                </li>
                </li>
                </ul>
            </div>
        </div>
    </nav>
</div>`
);