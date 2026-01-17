import React from 'react'
import { FadeLoader } from 'react-spinners'

export function Loading() {
  return (
    <>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: "100px" }}>
            <FadeLoader color="#0cc0df" />
        </div>
    </>
  )
}


export function SkeletonLoading() {
  const wrapperStyle: React.CSSProperties = {
  padding: '15px 15px',
  background: '#fff',
  width: '360px',
  display: 'flex',
  flexDirection: 'column',
  borderRadius:"5px"
};

const wrapperCellStyle: React.CSSProperties = {
  display: 'flex',
  marginBottom: '10px',
};

const imageStyle: React.CSSProperties = {
  height: '45px',
  width: '50px',
  borderRadius: '6px',
  background: 'linear-gradient(to right, #F6F6F6 8%, #E0E0E0 18%, #F6F6F6 33%)',
  backgroundSize: '800px 104px',
  animation: 'placeHolderShimmer 1.25s linear infinite',
};

const textStyle: React.CSSProperties = {
  marginLeft: '20px',
  flex: 1,
};

const textLineStyle: React.CSSProperties = {
  height: '6px',
  width: '100%',
  margin: '4px 0',
  borderRadius: '4px',
  background: 'linear-gradient(to right, #F6F6F6 8%, #E0E0E0 18%, #F6F6F6 33%)',
  backgroundSize: '800px 104px',
  animation: 'placeHolderShimmer 1.25s linear infinite',
};


  return (
    <>
      <style>
        {`
          @keyframes placeHolderShimmer {
            0% { background-position: -468px 0; }
            100% { background-position: 468px 0; }
          }
        `}
      </style>
      <div style={wrapperStyle}>
        {[...Array(4)].map((_, idx) => (
          <div style={wrapperCellStyle} key={idx}>
            <div style={imageStyle}></div>
            <div style={textStyle}>
              <div style={textLineStyle}></div>
              <div style={textLineStyle}></div>
              <div style={textLineStyle}></div>
              <div style={textLineStyle}></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
