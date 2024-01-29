import React, { useState, useEffect } from "react";
import FacultyImage from "./FacultyImage";
import FacultyInfoBox from "./FacultyInfoBox";
import { dataArray } from "../../constants/data";
import { AnimatePresence } from "framer-motion";

const FacultyInfoTablet = ({ dark, dataArray, itemsPerRow }) => {
  const [infoIndex, setInfoIndex] = useState(0);
  const [arrowIndex, setArrowIndex] = useState(0);

  const [rowCount, setRowCount] = useState(0)
  const [totalItems, setTotalItems] = useState(0)

  useEffect(() => {
    if (itemsPerRow && dataArray) {
      const numberOfRows = Math.ceil(dataArray.length / itemsPerRow)
      setRowCount(numberOfRows)
      setTotalItems(dataArray.length)
    }
  }, [dataArray, itemsPerRow])

  useEffect(() => {
    console.log("ROW_COUNT", rowCount)
  }, [rowCount])

  useEffect(() => {
    console.log("TOTAL_ITEMS", totalItems)
  }, [totalItems])

  const assignIndices = (info, arrow) => {
    if (info !== infoIndex) {
      window.scrollBy(0, 200);
    }
    setInfoIndex(info);
    setArrowIndex(arrow);
  };

  const closeInfoBox = () => {
    setInfoIndex(0);
    setArrowIndex(0);
    window.scrollBy(0, -200);
  };

  function oneToNArr(n) {
    const arr = []
    for (let i = 1; i <= n; i++) {
      arr.push(i)
    }
    return arr;
  }

  // Gets position for a specific element
  function getPos(rowNumber, itemsFromLeft) {
    return (rowNumber * itemsPerRow) - (itemsPerRow - itemsFromLeft) - 1
  }

  return (
    <div className="faculty-info-tablet">

      {oneToNArr(rowCount).map((rowNumber) => (<div key={rowNumber} className="py-3">
        <div id="first row" className="d-flex justify-content-between gap-4">
          {dataArray[getPos(rowNumber, 1)] && <FacultyImage
            onClose={closeInfoBox}
            onClick={() => {
              arrowIndex === 1 ? closeInfoBox() : assignIndices(rowNumber + 1, getPos(rowNumber, 1));
            }}
            index={1}
            tablet
            data={dataArray[getPos(rowNumber, 1)]}
            arrowIndex={arrowIndex}
          />}

          {dataArray[getPos(rowNumber, 2)] && <FacultyImage
            onClose={closeInfoBox}
            onClick={() => {
              arrowIndex === 2 ? closeInfoBox() : assignIndices(rowNumber + 1, getPos(rowNumber, 2));
            }}
            data={dataArray[getPos(rowNumber, 2)]}
            index={2}
            tablet
            arrowIndex={arrowIndex}
          />}

          {dataArray[getPos(rowNumber, 3)] && <FacultyImage
            onClose={closeInfoBox}
            onClick={() => {
              arrowIndex === 3 ? closeInfoBox() : assignIndices(rowNumber + 1, getPos(rowNumber, 3));
            }}
            index={3}
            tablet
            data={dataArray[getPos(rowNumber, 3)]}
            arrowIndex={arrowIndex}
          />}
        </div>
        
        <AnimatePresence>
          {infoIndex === rowNumber + 1 && (
            <FacultyInfoBox
              onClose={closeInfoBox}
              dark={dark}
              data={dataArray[arrowIndex]}
            />
          )}
        </AnimatePresence>
      </div>))}

      {/* <div className="py-3">
        <div id="first row" className="d-flex justify-content-between gap-4">
          <FacultyImage
            onClose={closeInfoBox}
            onClick={() => {
              arrowIndex === 1 ? closeInfoBox() : assignIndices(1, 1);
            }}
            index={1}
            tablet
            data={dataArray[0]}
            arrowIndex={arrowIndex}
          />
          <FacultyImage
            onClose={closeInfoBox}
            onClick={() => {
              arrowIndex === 2 ? closeInfoBox() : assignIndices(1, 2);
            }}
            data={dataArray[1]}
            index={2}
            tablet
            arrowIndex={arrowIndex}
          />
          <FacultyImage
            onClose={closeInfoBox}
            onClick={() => {
              arrowIndex === 3 ? closeInfoBox() : assignIndices(1, 3);
            }}
            index={3}
            tablet
            data={dataArray[2]}
            arrowIndex={arrowIndex}
          />
        </div>
        <AnimatePresence>
          {infoIndex === 1 && (
            <FacultyInfoBox
              onClose={closeInfoBox}
              dark={dark}
              data={dataArray[arrowIndex - 1]}
            />
          )}
        </AnimatePresence>
      </div> */}

      {/* <div className="py-3">
        <div id="first row" className="d-flex justify-content-between gap-4">
          <FacultyImage
            onClose={closeInfoBox}
            onClick={() => {
              arrowIndex === 4 ? closeInfoBox() : assignIndices(2, 4);
            }}
            data={dataArray[3]}
            index={4}
            tablet
            arrowIndex={arrowIndex}
          />
          <FacultyImage
            onClose={closeInfoBox}
            onClick={() => {
              arrowIndex === 5 ? closeInfoBox() : assignIndices(2, 5);
            }}
            data={dataArray[4]}
            index={5}
            tablet
            arrowIndex={arrowIndex}
          />
          <FacultyImage
            onClose={closeInfoBox}
            onClick={() => {
              arrowIndex === 6 ? closeInfoBox() : assignIndices(2, 6);
            }}
            data={dataArray[5]}
            index={6}
            tablet
            arrowIndex={arrowIndex}
          />
        </div>
        <AnimatePresence>
          {infoIndex === 2 && (
            <FacultyInfoBox
              onClose={closeInfoBox}
              dark={dark}
              data={dataArray[arrowIndex - 1]}
            />
          )}
        </AnimatePresence>
      </div>

      <div className="py-3">
        <div id="first row" className="d-flex justify-content-between gap-4">
          <FacultyImage
            onClose={closeInfoBox}
            onClick={() => {
              arrowIndex === 7 ? closeInfoBox() : assignIndices(3, 7);
            }}
            data={dataArray[6]}
            index={7}
            tablet
            arrowIndex={arrowIndex}
          />
          <FacultyImage
            onClose={closeInfoBox}
            onClick={() => {
              arrowIndex === 8 ? closeInfoBox() : assignIndices(3, 8);
            }}
            data={dataArray[7]}
            index={8}
            tablet
            arrowIndex={arrowIndex}
          />
        </div>
        <AnimatePresence>
          {infoIndex === 3 && (
            <FacultyInfoBox
              onClose={closeInfoBox}
              dark={dark}
              data={dataArray[arrowIndex - 1]}
            />
          )}
        </AnimatePresence>
      </div> */}
    </div>
  );
};

export default FacultyInfoTablet;
