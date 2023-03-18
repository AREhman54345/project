import React from 'react'

export default function extra() {
  return (
    <div>e<div className="col p-1">
      <div>

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
  </div></div>
  )
}
