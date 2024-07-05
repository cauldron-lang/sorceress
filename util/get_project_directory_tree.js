import fs from 'fs';
import { basename, join } from 'path';

const getProjectDirectoryTree = (projectDirectoryPath) => {
    const treeNode = {
        name: basename(projectDirectoryPath),
        path: projectDirectoryPath,
        isFolder: true,
        nodes: [],
    };
    const files = fs.readdirSync(projectDirectoryPath);

    files.forEach(file => {
        const filePath = join(projectDirectoryPath, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            treeNode.nodes.push(getProjectDirectoryTree(filePath));
        } else if (stats.isFile()) {
            treeNode.nodes.push({
                name: file,
                path: filePath,
                isFolder: false,
            });
        }
    });

    return treeNode;
};

export default getProjectDirectoryTree;