import React from "react";

function Table({ results }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Language</th>
                    <th>Data size</th>
                    <th>Execution time</th>
                </tr>
            </thead>
            <tbody>
                {results.map((result) => (
                    <tr key={`${result.language}-${result.size}`}>
                        <td>{result.language}</td>
                        <td>{result.size}</td>
                        <td>{result.executionTime} ms</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
