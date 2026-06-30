function Projects() {
    return <div> <section className="py-20 px-4 bg-black-800">
  <h2 className="text-3xl font-bold text-white text-center mb-10">Projects</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-20 justify-items-center">
    
   {/* Tic Tac Toe Project */}
<div className="p-6 rounded-lg text-white shadow-lg tictactoe-hover max-w-sm hover:scale-105 transition-transform duration-500">
  <h3 className="text-2xl font-semibold mb-2">Tic Tac Toe Game</h3>
  <p>
    Built a 2-player Tic Tac Toe game in C++. Learned about arrays, loops, functions, and game logic implementation. Applied programming concepts to create an interactive console game.
  </p>
</div>

{/* ISSA Time complexity */}
<div className="p-6 rounded-lg text-white shadow-lg issa-hover max-w-sm hover:scale-105 transition-transform duration-500">
  <h3 className="text-2xl font-semibold mb-2">Optimized ISSA Selection Sort using ASSM</h3>
  <p>
    Designed and implemented the ASSM (Adaptive Selection Sort with MERGE) in C++ to optimize the ISSA Selection Sort algorithm. Improved its worst-case and average-case time complexity from O(n²) to O(n log n) through algorithm optimization and efficient sorting logic, resulting in significantly better performance while maintaining accurate sorting results.
  </p>
</div>

    {/* Army Management Project */}
<div className="p-6 rounded-lg text-white shadow-lg army-hover max-w-sm hover:scale-105 transition-transform duration-500">
  <h3 className="text-2xl font-semibold mb-2">Army Management System</h3>
  <p>
    Developed a console-based Army Management System in C++. Managed soldiers, weapons, and resources using data structures and file handling. Learned object-oriented programming concepts and organized complex data efficiently.
  </p></div>
  </div>
  </section>
  </div>
  
}

export default Projects