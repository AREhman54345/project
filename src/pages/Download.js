import React, { useEffect, useRef, useState } from "react";
import Bar from "../components/Bar";
import logooo from "../Assets/logooo.jpeg";
import sec from "../Assets/sec.jpeg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Rating from "@mui/material/Rating";

import Stack from "@mui/material/Stack";
import th from "../Assets/th.jpeg";
import Ads from "../components/Ads";
import Footer from "../components/Footer";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { ImageUrl } from "../components/Imag";
import { Helmet } from "react-helmet";
import {
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { Button } from "react-bootstrap";
import { pink } from "@mui/material/colors";
import { PinDropRounded } from "@material-ui/icons";
import Swal from "sweetalert2";

export default function Download() {
  const aboutSection = useRef(null);
  let lction = useLocation();
  const abc = lction.state?.rehman;

  let cat = abc[0].categoryId._id;

  console.log(cat);
  const [rgame, setrgame] = useState([]);

  const [stitle, setstitle] = useState("");
  const load = async () => {
    setstitle(abc[0].googlePageTitle);
    await axios
      .post(`https://apkserver.tech-east.com.pk/apk/relatedGames${cat}`)
      .then((getdata) => {
        setrgame(getdata.data.doc);
        console.log(rgame);
      });
  };
  // console.log(abc.ckEditiorText)
  useEffect(() => {
    document.title = stitle;
    load();
  }, [stitle]);

  console.log(abc[0].imagesAlt);

  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  let navigation = useNavigate();
  const Download = (_id) => {
    axios
      .get(`https://apkserver.tech-east.com.pk/apk/getSingleProduct${_id}`)
      .then((getdata) => {
        console.log(getdata.data.doc);
        navigation("/Ndownload", { state: { ndown: getdata.data.doc } });
      });
  };

  // For Pop Up Just

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    axios
      .post("https://apkserver.tech-east.com.pk/report/report", {
        item: pid,
        useremail: mail,
        issue: problem,
      })
      .then((response) => {
        console.log(response);
      })
      .then(() => {
        Swal.fire("Thanks For Feedback!");
      });
  };

  const [mail, setmail] = useState("");
  const [problem, setproblem] = useState("");
  let pid = abc[0]._id;
  console.log(pid, mail, problem);
  return (
    <div>
      <Helmet>
        <meta name="description" content={abc[0].metaContent} />
      </Helmet>
      <Bar />

      <div className="container my-5">
        <br />

        <div className="row ">
          {abc.map((e) => (
            <div className="col-sm-7 mx-4">
              <h1>
                {e.title}
                {/* &nbsp; <span style={{ color: "#ffac14" }}>Choice</span> */}
              </h1>
              <h4>{e.version}</h4>

              <div className="container-fluid bg-warning rounded rounded-4 text-white col-lg-12 col-sm-12">
                <div className="row">
                  <div className="col-sm-2 py-2">
                    <img
                      src={ImageUrl + e.apkImages[0]}
                      alt={e.imagesAlt}
                      height="105"
                      width="105"
                      style={{ borderRadius: "20px", padding: "3px" }}
                    />
                    <button
                      className="px-4 my-2 cursor btn fw-bold"
                      style={{ cursor: "pointer" }}
                      onClick={handleClickOpen}
                    >
                      Report
                    </button>

                    <Dialog
                      open={open}
                      onClose={handleClose}
                      style={{ width: "450px" }}
                    >
                      <DialogTitle>Report</DialogTitle>
                      <DialogContent>
                        <FormGroup>
                          <FormControlLabel
                            control={
                              <Checkbox
                                defaultChecked
                                sx={{
                                  color: pink[800],
                                  "&.Mui-checked": {
                                    color: pink[600],
                                  },
                                }}
                              />
                            }
                            label="Thanks For Choosing Royal Games"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox defaultChecked color="success" />
                            }
                            label="Submit page information"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox defaultChecked color="success" />
                            }
                            label="Include problem key point"
                          />

                          <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                            variant="standard"
                            onChange={(e) => {
                              setmail(e.target.value);
                            }}
                          />
                          <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Explain problem"
                            type="email"
                            fullWidth
                            variant="standard"
                            onChange={(e) => {
                              setproblem(e.target.value);
                            }}
                          />

                          <br />
                          <strong>Describe your problem</strong>
                          <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            label="Submit page information"
                          />
                          <FormControlLabel
                            control={<Checkbox />}
                            label="I can't download the APK file"
                          />
                          <FormControlLabel
                            control={<Checkbox />}
                            label="I can't install the APK file"
                          />
                          <FormControlLabel
                            control={<Checkbox />}
                            label="The file is not supported"
                          />
                          <FormControlLabel
                            control={<Checkbox />}
                            label="The file doesn't exist"
                          />
                          <FormControlLabel
                            control={<Checkbox />}
                            label="Request for update"
                          />
                          <FormControlLabel
                            control={<Checkbox />}
                            label="Others"
                          />
                        </FormGroup>
                      </DialogContent>
                      <DialogActions>
                        <Button
                          onClick={handleClose}
                          style={{
                            width: "370px",
                            height: "35px",
                            backgroundColor: "black",
                          }}
                        >
                          Submit
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </div>

                  <div className="col-sm-3 py-2 mx-4 my-1">
                    <div className="">
                      <strong className="text-black">{e.title}</strong>
                      <p className="text-black">Updated: Feb 24, 2023</p>
                      <div>
                        <strong className="text-black">INFO</strong>
                        <br />
                        <strong className="fa fa-tag text-black fw-bold">
                          {" "}
                          &nbsp; Price
                        </strong>
                        <br />
                        <span>{e.price}</span>
                        <br />
                        <strong className="fa fa-list-alt text-black fw-bold">
                          {" "}
                          &nbsp; Category
                        </strong>
                        <br />
                        <span>Arcade</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3 py-5 mx-1">
                  <br />
    
    <br />
<br/>
    <strong className="fa fa-tree text-black fw-bold">
      {" "}
      Compatible with
    </strong>
    <br />
    <span>{e.compatible}</span>
    <br />
    <strong className="fa fa-mobile text-black fw-bold">
      {" "}
      &nbsp; Developer
    </strong>
    <br />
    <strong>{e.developerName}</strong>
                  </div>

                  <div className="col-sm-2 py-3 mx-1">
                  <Stack spacing={1}>
      <Rating
        name="half-rating-read"
        defaultValue={5.0}
        precision={0.5}
        readOnly
        className=" text-white"
      />
    </Stack>

    <br />
    
    <br />
<br/>
    <strong className=" py-2 fa fa-arrows-v text-black fw-bold">
      {" "}
      &nbsp; Size
    </strong>
    <br />
    <span>{e.size}</span>
    <br />
    <strong className="fa fa-play text-black fw-bold">
      {" "}
      Google Play
    </strong>
    <br />
    <strong className="mx-2">{e.playStoreLink}&nbsp;</strong>
                  </div>

                  
                </div>
                &nbsp; &nbsp;
                {/* <div className="col p-1">
                  <strong className="text-black">{e.title}</strong>

                  <p className="text-black">Updated: Feb 24, 2023</p>

                  <strong className="text-black">INFO</strong>
                  <br />
                  <strong className="fa fa-money text-black fw-bold">
                    {" "}
                    &nbsp; Price
                  </strong>
                  <br />
                  <span>{e.price}</span>
                  <br />
                  <strong className="fa fa-list-alt text-black fw-bold">
                    {" "}
                    &nbsp; Category
                  </strong>
                  <br />
                  <span>Arcade</span>
                </div>
                <div className="col p-1">
                  <br />
                  <br />
                  <br />
                  <br />

                  <strong className="fa fa-tree text-black fw-bold">
                    {" "}
                    &nbsp; Compatible with
                  </strong>
                  <br />
                  <span>{e.compatible}</span>
                  <br />
                  <strong className="fa fa-mobile text-black fw-bold">
                    {" "}
                    &nbsp; Developer
                  </strong>
                  <br />
                  <strong>{e.developerName}</strong>
                </div>
                <div className="col p-1">
                  <Stack spacing={1}>
                    <Rating
                      name="half-rating-read"
                      defaultValue={5.0}
                      precision={0.5}
                      readOnly
                      className=" text-white"
                    />
                  </Stack>
                  <br />
                  <br />
                  <br />

                  <strong className="fa fa-arrows-v text-black fw-bold">
                    {" "}
                    &nbsp; Size
                  </strong>
                  <br />
                  <span>{e.size}</span>
                  <br />
                  <strong className="fa fa-play text-black fw-bold">
                    {" "}
                    &nbsp; Google Play
                  </strong>
                  <br />
                  <strong>{e.playStoreLink}</strong>
                </div> */}
              </div>

              <strong className="justify-content-center d-flex my-4">
                <br />
                <br />
                <button
                  className="btn justify-content-center align-items-center d-flex text-white rounded-5"
                  style={{
                    height: "35px",
                    width: "210px",
                    backgroundColor: "#424242",
                  }}
                >
                  <strong
                    className="fa fa-download"
                    onClick={() => scrollDown(aboutSection)}
                  >
                    {" "}
                    &nbsp; Download Now
                  </strong>
                </button>
              </strong>
              <div>
                <Ads />
              </div>

              {/* paragraphs */}

              <div
                className="card rounded
             rounded-3 border-0 shadow"
              >
                <div className="p-2">{e.ckEditiorText}</div>
              </div>

              {/* Questions according */}
              <div className="col-sm-12 my-5">
                <h2 className="px-1 text-center"> FAQ</h2>
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item my-2 border-0 shadow">
                    <h2 class="accordion-header" id="headingOne">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        How To Get Free Minecraft On Android?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        You need to pay to access Minecraft, as it is not a free
                        game. You cannot get Minecraft for free on Android. You
                        need to pay for it to get it on your Android device.
                        Minecraft APK free is just an illusion. A free version
                        of the Minecraft game has not been produced yet. You can
                        only get to download the game and sign up on an existing
                        account through the Minecraft website.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Is Minecraft Free On Android?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        You need to pay to access Minecraft, as it is not a free
                        game. You cannot get Minecraft for free on Android. You
                        need to pay for it to get it on your Android device.
                        Minecraft APK free is just an illusion. A free version
                        of the Minecraft game has not been produced yet. You can
                        only get to download the game and sign up on an existing
                        account through the Minecraft website.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Who’s Your Daddy Minecraft Map?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        You need to pay to access Minecraft, as it is not a free
                        game. You cannot get Minecraft for free on Android. You
                        need to pay for it to get it on your Android device.
                        Minecraft APK free is just an illusion. A free version
                        of the Minecraft game has not been produced yet. You can
                        only get to download the game and sign up on an existing
                        account through the Minecraft website.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        How to Download Minecraft On Phone?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        You need to pay to access Minecraft, as it is not a free
                        game. You cannot get Minecraft for free on Android. You
                        need to pay for it to get it on your Android device.
                        Minecraft APK free is just an illusion. A free version
                        of the Minecraft game has not been produced yet. You can
                        only get to download the game and sign up on an existing
                        account through the Minecraft website.
                      </div>
                    </div>
                  </div>
                </div>
                <strong className="justify-content-center d-flex my-5">
                  <br />
                  <br />
                  <button
                    className="btn justify-content-center align-items-center d-flex text-white rounded-5"
                    style={{
                      height: "35px",
                      width: "299px",
                      backgroundColor: "#424242",
                    }}
                    ref={aboutSection}
                    onClick={() => Download(e._id)}
                  >
                    <strong className="fa fa-download">
                      &nbsp; Download {e.title} [{e.version}]
                    </strong>
                  </button>
                </strong>
              </div>
              <div>
                <Ads />
              </div>

              <div
                className="my-4 rounded rounded-4"
                style={{ backgroundColor: "#fcfcfc" }}
              >
                <div className="m-5">
                  <h4 className="my-3">Is MineCraft Free For Android ?</h4>
                  <strong>
                    Your Comments <span className="text-danger">(*)</span>
                  </strong>
                  <div className="text-center d-flex justify-content-center my-3">
                    <Stack spacing={1}>
                      <Rating
                        name="half-rating-read"
                        defaultValue={2.5}
                        precision={0.5}
                        readOnly
                      />
                    </Stack>
                  </div>
                  <div className="py-3">
                    <input
                      className="form-control rounded rounded-4"
                      style={{ height: "200px" }}
                    />
                  </div>
                </div>
                <strong className="justify-content-center d-flex my-5">
                  <button
                    className="btn justify-content-center align-items-center d-flex text-white rounded-5 mb-4"
                    style={{
                      height: "35px",
                      width: "w-100",
                      backgroundColor: "#424242",
                    }}
                  >
                    <strong className=""> &nbsp; Submit Comment</strong>
                  </button>
                </strong>
              </div>
            </div>
          ))}

          <div className="col-sm-4">
            <h3>Related Games</h3>
            <div className="py-3">
              {rgame.map((e) => (
                <div className="d-flex">
                  <div>
                    <img
                      src={ImageUrl + e.apkImages[0]}
                      alt="logo"
                      height="95"
                      width="95"
                      style={{ borderRadius: "20px", padding: "3px" }}
                    />
                  </div>
                  &nbsp; &nbsp;
                  <div className="d-flex flex-column gap-1">
                    <strong>{e.title}</strong>
                    <span>Version: 1.19.63.01</span>
                    <span>Mod: God Mode</span>
                    <span>Downloads: 1000+</span>
                    <button
                      className="btn border border-success border-2 position-relative p-0 justify-content-center align-items-center d-flex"
                      style={{ height: "20px", width: "100px" }}
                    >
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
