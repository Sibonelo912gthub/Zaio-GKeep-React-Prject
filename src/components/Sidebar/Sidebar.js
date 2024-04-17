import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [isSidebar, setisSidebar] = useState(false);

  //TOGGLE SIDEBAR
  const handleMouseOverSideBar = () => {
    setisSidebar(true);
  };
  const handleMouseOutSideBar = () => {
    setisSidebar(false);
  };
  return (
    <div
      className={`sidebar ${isSidebar ? "sidebar-hover" : ""}`}
      onMouseOver={handleMouseOverSideBar}
      onMouseOut={handleMouseOutSideBar}
      style={{ width: isSidebar ? "250px" : "80px" }}
    >
      <div
        className={`sidebar-item active-item ${
          isSidebar ? "sidebar-active-item" : ""
        }`}
      >
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACJklEQVR4nMVUy2oUURAdIUpcuNRPUPAPAkrA+NZEJAxu7Krpqs6tM6gLv2BAt27U+AFuAoKIiQsRfyG+cCE4+QHdqAsXAXWkbnfPjBPHaTuBFBRU162ux7mnbqOx29JsNveRYIEVD1jsmSuJLbc0zIcQ9m4reUvtPAs2WNEjwVcWW3eNtqLHYl3WcLZWclK7TmI/SfGWpX1httOZKs/cTjJcZLF3HsMZrv1353lye8zM0+Pi/IwVTzw2yXCmMuYOS+ycxycfxN/cz2rvSfGx0p0UF9pzWCp1FCcO8/6PwzYx2NlCal+GMU+y7PBonAiOlLZ3zmrfWHB/coGciuvld5ra0aK7PsYk7dPu87O+T/GKBGsVJrBVVntdfs92OlMs9okFK4MmsEJqn4cxJ7E3LHg6sQAp7jnPR35eJsF3ETng6rb7RiEisbuTC6Q4VyzWQulLJMxEX2rEgiRCJmGmf57ZpUiMKktXQNIlwYchmu7JN9peRBVsuC/CxTwdY8W6w8T4p7QynIiLJnheFiGxW6z44ep2CY1fbNxmCXOVkg+gMioSPkrS9klStHMY0HPbfax4yIpfLLbUqCOsdrtMOk5J7E6t5MUUl/OOzbzjYeXUNF62hiu1CyRpOJY/G1jcMp1g0c9aGY7XLuCs8EfMH7MtExQPXGXmjJOW2ilWbP4F/00v1NgJuQocchr2u5cwl6Y3DjZ2SlhsidVe/qF1qbkrBbYjvwGiOFfAk3GFRgAAAABJRU5ErkJggg=="
          alt=""
          className="
        notes"
        />
        <span className="sidebar-text">Notes</span>
      </div>
      <div className="sidebar-item">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+UlEQVR4nO2UsUpDMRSG08VOiqt07UP0EXRS+hpanDt9fyDLHSrctxIHHStoh9ZX0PmWU3IhCpZ704CCHvghJOf8X04S4tyfCWAMvEaNiwMkzSU1UfNixsARcCPpJQHY+NrWDjIPIYwkPSXGnwQ8hhDOsszruh4m5kvv/WVVVccm4Ap4biFZnUi6bc2B06/rNtdCJM16A4AHK7ad78mZxi7uczr4sGI7kj2Akwh4zwHsLtIVyvsHNH1PaJBxB4PO7sAkFq47ANbxJU36AO4iYNEBsOia2xY0h8j9OOC7kLRKjFaudEh6S77pTXGA9/7CIGYOnBcH/NrYAqsqM6f/39t5AAAAAElFTkSuQmCC"
          className="reminders"
          alt=""
        />
        <span className="sidebar-text">Reminders</span>
      </div>
      <div className="sidebar-item">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABs0lEQVR4nO2aoU4DQRCGR2BBIHkMEjSgCTiCaDq7N9PezNGQ1CH7DPAIaAwPgEFgCLJvQA0KDBCSAlnoNaU5yoHpbLNfsuZuxX75b2eTnQNIJP6EbxcbjuUCSR8cy5NjvW5yfgAx0WR1SPrqWN+nB7KeQgxs9npLjvWmSqIcnot9iAFmXkXW259EkOQKrOJI2sgyQCq2f5eRR7CIo1wd69vnIqnYKZ//JIMs92BaItPu9PsqGWQ5h5gkqmRCNfM+X4fYJCZlQjULpRlilPCc7zqWrbI0gxWQRepKuEy7oz0xAEv8R8KF+a0iBysgawtJhl8btjiuL6EdsMJCSLhMOElYICURexJNkkOwQpKwwkIk4UkpSVjApySM4FMSRvApiciTQNYCrOCThBH8IiSBXGRJwgKOxJdJ1L4BDPMzYbBCo3G0gqzPUUsEkHRvfClGuUKdy7MZ8+YGkpxMNFIqF2leIoCs/an21rfFRiFB1Fkb35BXyEQhEcBMcEYbeHQoyjAckmAZZDmb1ZxHkpdQmsE6jvWu4jeJfigAoe1FRMsQA0hyGWRCMuEzC3tm3mtKQMR8AEdJ1nTdVzMBAAAAAElFTkSuQmCC"
          alt=""
          className="edit"
        />
        <span className="sidebar-text">Edit Labels</span>
      </div>
      <div className="sidebar-item">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABFUlEQVR4nO2UPUoEQRCFOzIRD+ERFPHnEoYeYVNRg42W7/V04jDnUREEI8HNNvEERoIKHmBnpdiazFnaHjcQffCgaV7Vq64uKoR/lEDSGfAuaZHJN0mnWcljjAdAK+kWuMyha1tgP6f6G+C1ruut3Bc3TbMp6UXS1UohsOfVj3OTd7AYa5d1IPQBuHaD5AHjbzB5bP8rXLAYQqDtNXCBQiEAWY5iA+Awxni0ToM749oMJN0bf5cBMPIR3OgM/Gx3o8EGki58fKeSnpxTXw3ngw0MwLEvtG7eP4CT8JN/kFLalvQAPNr5K02Owdx6Gwqh5YqZ9wqAmaRnSZOCXTSxWMuxymDXBCU7ieWnz6qq2intQPib+ARqHZ6ztDKM6gAAAABJRU5ErkJggg=="
          alt=""
          className="archive"
        />
        <span className="sidebar-text">Archive</span>
      </div>

      <div className="sidebar-item">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAVklEQVR4nGNgGBEgPjm9IT454z8qTu8g0zB0gzJIwgNvAQiQpJiBdPX0tyCeRP6oBQyjQcQwmopGYBARAoPSgidk1AVPiLYgLinDj0RLnoD0EG3BkAIANOFsgNffmzEAAAAASUVORK5CYII="
          alt=""
          className="delete"
        />
        <span className="sidebar-text">Trash</span>
      </div>
    </div>
  );
};
export default Sidebar;
