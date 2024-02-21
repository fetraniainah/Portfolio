import '../../index.css'
import avatar from '../../assets/avatar.png'
import Expertise from './Expertise'
export default function Home(){
    return(
        <div>
               <main class="py-2">
            <div class="container ">
                <div class="img-full w-100  ">   
                </div>

                <div class="position-relative">
                    <div class="avatar" style={{background:"grey",borderRadius:"50%"}}><img src={avatar} alt="avatar"/></div>
                </div>
            </div>

            <div class="container">
                <div class="row mx-auto">
                    <div class="col-md-6 py-3">
                        <h4 class="mt-3 p-1 m-0 user txt-ann">Tahirifetrasoa jean joseph</h4>
                        <h5 className='p-1 m-0'>Développeur PHP</h5>
                        <h5 className='txt-ann'><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-half"></i></h5>
                        <h6 className='p-1 m-0'><i class="bi bi-geo-alt"></i> Antananarivo, Madagascar </h6>
                    </div>
                    <div class="col-md-5 py-3 ms-auto">
                        <div className='d-flex justify-content-around mt-3'>
                        <div className="nav-links">
                            <p className='p-0 m-0 vs'>100</p>
                            <p className='vs'><samp><i class="bi bi-eye-fill txt-ann"></i> </samp>Vues </p>
                        </div>

                        <div className="nav-links">
                            <p className='p-0 m-0 vs'>0</p>
                            <p className='vs'><span><i class="bi bi-heart-fill txt-ann"></i> </span> J'aimes</p>
                        </div>
                        </div>

                        <div className="mt-2">
                            <p className='p-0 m-0 fw-bold text-center'> <i class="bi bi-app-indicator text-success"></i> Disponible : Freelance/Local</p>
                        </div>

                    </div>
                </div>
            </div>
            </main>

            <main className='container'>

                <div className="row">
                    <div className="col-md-7 ">
                        <div class="container shadow-lg  py-3 rounded-4 bg-white">
                            <h4><i class="bi bi-book-half txt-ann"></i> Présentation</h4>
                            <p class="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquam enim ducimus quasi error reprehenderit ex, eum, ratione autem molestias, eius minus culpa libero aperiam laudantium laboriosam facere tempora. Ducimus ipsum delectus vel commodi soluta, saepe aspernatur! Adipisci animi totam, nulla hic vero accusamus numquam nihil voluptatum perferendis harum quas, tempore perspiciatis distinctio? Nemo commodi quam iusto sequi sint omnis quo ea quis in vitae dignissimos, harum eius debitis repellat necessitatibus consectetur modi ut suscipit veniam ducimus! Error, voluptatem dolores repellat magnam quo alias provident ipsam. Ut voluptatum voluptatem, voluptates facere maxime pariatur cumque eum expedita dolor? Id, cum nam.</p>
                         </div>

                        <div class="container shadow-lg  py-3 rounded-4 mt-5">
                            <h4><i class="bi bi-duffle text-primary txt-ann"> </i>Formations</h4>
                            <div class="  rounded-4 p-2">
                                <h6 class="p-0 m-0 fw-bold"><i class="bi bi-stack text-warning"></i> L I C E N C E</h6>
                                <small class="p-0 m-0">Mention : Informatique de gestion</small><br/>
                                <small class="p-0 m-0">Années : 2022 - 2023</small><br/>
                                <small class="p-0 m-0">Etablissement : GSI Antananarivo</small><br/>
                            </div>

                            <div class=" p-2 my-4">
                                <h6 class="p-0 m-0 fw-bold"><i class="bi bi-stack text-warning"></i> D T S</h6>
                                <small class="p-0 m-0">Mention : Informatique de gestion</small><br/>
                                <small class="p-0 m-0">Années : 2020 - 2022</small><br/>
                                <small class="p-0 m-0">Etablissement : GSI Antananarivo</small><br/>
                            </div>

                            <div class="  p-2">
                                <h6 className="p-0 m-0 fw-bold"><i className="bi bi-stack text-warning"></i> B A C C A L A U R E A T</h6>
                                <small class="p-0 m-0">Mention : Informatique de gestion</small><br/>
                                <small class="p-0 m-0">Années : 2018 - 2019</small><br/>
                                <small class="p-0 m-0">Etablissement : LMB Tsiroanomandidy</small><br/>
                            </div>
                        </div>
                        
                        <div class="container py-3 shadow-lg bg-white mt-5 rounded-4">
                            <h4><i class="bi bi-terminal-plus text-primary txt-ann"></i> Expériences et références</h4>
                            <div class="d-flex bg-light rounded-4 p-2">

                            </div>
                        </div>

                        <div class="container py-3 shadow-lg mt-5 bg-white rounded-4">
                            <h4><i class="bi bi-person-workspace text-primary txt-ann"></i> Domaines d'expertise</h4>
                            <Expertise/>
                        </div>

                        <div class="container py-3 bg-white shadow-lg mt-5 rounded-4">
                            <h4><i class="bi bi-check2-circle text-primary txt-ann"></i> Recommandations</h4>
                            <div class="d-flex bg-light rounded-4 p-2">

                            </div>
                        </div>


                </div>

                    <div className="col-md-5">
                        <div class="container py-3 shadow-lg  rounded-4 bg-white">
                            <h4 className='text-center fw-bold'><i class="bi bi-pin-map txt-ann"></i> Coordonées</h4>
                            <div class="d-flex flex-column p-2">
                                <div className='mb-2'>
                                    <h6 className='p-0 m-1'>Ville </h6>
                                    <p className='p-0 m-1'>Antananarivo</p>
                                </div>

                                <div className='mb-2'>
                                    <h6 className='p-0 m-1'>Adresse </h6>
                                    <p className='p-0 m-1'>Tanjombato</p>
                                </div>

                                <div className='mb-2'>
                                    <h6 className='p-0 m-1'>Téléphone </h6>
                                    <p className='p-0 m-1'>+261339157162</p>
                                </div>

                                <div className='mb-2'>
                                    <h6 className='p-0 m-1'>Email </h6>
                                    <p className='p-0 m-1'>tahiri.fetra@gmail.com</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            
            </main>
        </div>
    )
}