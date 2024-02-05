const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
      <div className="flex">
          <div className="form-control">
              <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selectedClass" : ""}`}>
                  <span className="label.text text-gray-300">Male</span>
                  <input
                      type="checkbox"
                      className="checkbox border-gray-900"
                      checked={selectedGender === "male"}
                      onChange={() => onCheckboxChange("male")}
                  />
              </label>
          </div>
          <div className="form-control">
              <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selectedClass" : ""}`}>
                  <span className="label.text text-gray-300">Female</span>
                  <input
                      type="checkbox"
                      className="checkbox border-slate-900"
                      checked={selectedGender === "female"}
                      onChange={() => onCheckboxChange("female")}
                  />
              </label>
          </div>
      </div>
  );
};

export default GenderCheckbox;
