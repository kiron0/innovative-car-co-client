import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import Loader from "../../Shared/Loader/Loader";
import TItle from "../../Shared/Title/Title";
import CardTeam from "./CardTeam";
const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(`https://innovative-cars-co.herokuapp.com/teams`)
      .then((res) => res.json())
      .then((data) => {
        setTeams(data);
        setLoading(true);
      });
  }, []);

  return (
    <section className="teams py-20 px-8 sm:px-0">
      <div className="container mx-auto">
        <TItle
          title="Our Expert Technician"
          subTitle="These are main technicians of this company."
        />
        <Fade bottom distance="30px">
          {loading ? (
            <div className="teams-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-8">
              {teams.map((team) => (
                <CardTeam key={team._id} {...team} />
              ))}
            </div>
          ) : (
            <Loader />
          )}
        </Fade>
      </div>
    </section>
  );
};

export default Teams;
