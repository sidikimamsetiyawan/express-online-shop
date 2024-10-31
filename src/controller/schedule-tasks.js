
const displayScheduleTasks = (req, res) => {
    // Cek apakah req.body dan req.body.tasks sudah ada
    // if (req.body && req.body.tasks) {
    //     const tasks = req.body.tasks;

    //     // Lakukan pengolahan data pada tasks
    //     console.log('Tasks:', tasks);
        
    //     res.status(200).send("Data tasks berhasil diakses.");
    // } else {
    //     res.status(400).send("Data tasks tidak ditemukan dalam request.");
    // }
    // console.log("Dump - Request",req.body);
    // const { body } = req.body;
    // console.log("Dump - Variable Body",body.tasks);
    const taskList = req.body.tasks;
    console.log("Dump - Task List ",taskList);
    const tasks = new Map();
    const indegrees = new Map();

    try {
  
        // Initialize tasks and in-degrees
        taskList.forEach(task => {
        tasks.set(task.id, { ...task, dependencies: task.dependencies || [] });
        indegrees.set(task.id, 0);
        });
    
        // Build the graph and compute in-degrees
        taskList.forEach(task => {
        task.dependencies.forEach(dep => {
            if (!tasks.has(dep)) return;
            const dependencies = tasks.get(dep).dependencies || [];
            tasks.set(dep, { ...tasks.get(dep), dependencies: [...dependencies, task.id] });
            indegrees.set(task.id, (indegrees.get(task.id) || 0) + 1);
        });
        });
    
        // Topological sort using a queue for tasks ready to execute
        const queue = [];
        tasks.forEach((_, taskId) => {
        if (indegrees.get(taskId) === 0) queue.push(taskId);
        });
    
        const result = [];
        while (queue.length > 0) {
        const current = queue.shift();
        result.push(current);
    
        (tasks.get(current).dependencies || []).forEach(dep => {
            indegrees.set(dep, indegrees.get(dep) - 1);
            if (indegrees.get(dep) === 0) queue.push(dep);
        });
        }
    
        if (result.length !== taskList.length) {
        return { error: 'Cycle detected! Scheduling not possible' };
        }

        console.log(result);
        return res.json({
            message: 'GET all data products sort by sales.',
            data: result
        })

    } catch (error) {
        res.status(500).send(
            {
                message: 'Something went wrong.',
                error: error
            });
    }
}

module.exports = {
    displayScheduleTasks,
}