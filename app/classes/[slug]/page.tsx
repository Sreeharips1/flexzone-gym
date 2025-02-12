import { notFound } from "next/navigation";
import Image from "next/image";

const classData = {
  "body-building": {
    title: "Body Building",
    description:
      "Our bodybuilding class is designed to help you build muscle, increase strength, and improve your overall physique through structured resistance training. The session begins with a warm-up to prepare your body, followed by a focus on compound and isolation exercises like squats, bench presses, and bicep curls to target major muscle groups. Proper form and progressive overload are emphasized to maximize results and prevent injuries. Core exercises and a cool-down stretch round out the session. With a combination of free weights, machines, and bodyweight movements, this class promotes muscle growth, fat loss, and improved fitness. Join us to transform your body and boost your confidence!",
    image: "/assets/img/classes/bodybuilding.jpg",
  },
  cardio: {
    title: "Cardio",
    description:
      "Our cardio class is a high-energy workout designed to boost your heart health, burn calories, and improve endurance. The session includes a mix of activities like running, cycling, jumping rope, and high-intensity interval training (HIIT) to keep your heart rate elevated. We start with a dynamic warm-up to prepare your body, followed by a series of cardio exercises that target fat loss and improve stamina. The class ends with a cool-down and stretching to enhance flexibility and aid recovery. Suitable for all fitness levels, this class is perfect for anyone looking to improve cardiovascular fitness, increase energy levels, and have fun while breaking a sweat!",
    image: "/assets/img/classes/cardio.jpg",
  },
  crossfit: {
    title: "CrossFit",
    description:
      "Our CrossFit class is a high-intensity, functional fitness program designed to push your limits and improve overall strength, endurance, and agility. Each session features a variety of constantly varied workouts, combining weightlifting, gymnastics, and cardio exercises like squats, deadlifts, pull-ups, and rowing. The class begins with a dynamic warm-up to prepare your body, followed by the Workout of the Day (WOD), which challenges you to perform functional movements at high intensity. We end with a cool-down and stretching to aid recovery. Led by experienced coaches, this class emphasizes proper form, scalability, and community support, making it suitable for all fitness levels. Join us to build strength, endurance, and mental toughness in a motivating group setting!",
    image: "/assets/img/classes/crossfit.jpg",
  },
  fitness: {
    title: "Fitness",
    description:
      "Our fitness class offers a well-rounded workout designed to improve strength, endurance, flexibility, and overall health. Combining elements of cardio, strength training, and core exercises, this class provides a full-body workout to help you achieve your fitness goals. We begin with a dynamic warm-up to prepare your muscles, followed by a mix of bodyweight exercises, resistance training, and high-intensity intervals to boost metabolism and build strength. The session ends with a cool-down and stretching to improve flexibility and prevent injury. Suitable for all fitness levels, this class is perfect for anyone looking to enhance their physical fitness, increase energy, and enjoy a fun, motivating group environment!",
    image: "/assets/img/classes/fitness.jpg",
  },
};

const ClassPage = ({ params }: { params: { slug: string } }) => {
  const classInfo = classData[params.slug as keyof typeof classData];

  if (!classInfo) {
    return notFound(); // Show 404 page for invalid class
  }

  return (
    <div className="bg-black text-white py-24 px-6 md:px-16 lg:px-28">
      
      {/* Container Box */}
      <div className="bg-black p-10 rounded-lg shadow-lg max-w-5xl mx-auto">
        
        {/* Title Centered */}
        <h1 className="text-5xl font-extrabold text-accent uppercase tracking-wide text-center mb-8">
          {classInfo.title}
        </h1>

        {/* Flex Layout for Large Screens */}
        <div className="flex flex-col lg:flex-row items-stretch gap-8">
          
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6 flex flex-col justify-center">
            <p className="text-lg text-justify text-gray-300 leading-normal tracking-tight sm:leading-relaxed sm:tracking-normal">
              {classInfo.description}
            </p>
          </div>

          {/* Image Opposite to Text */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-full h-full max-w-md">
              <Image
                src={classInfo.image}
                width={500}
                height={550}
                alt={classInfo.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ClassPage;

