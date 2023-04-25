import path from "path";
import fs from 'fs';

export default function handler(req: any, res: any){
    const filePath = path.join(process.cwd(), 'public', 'pdfs', `mfajarna_resume.pdf`);
    const stat = fs.statSync(filePath);
    const fileStream = fs.createReadStream(filePath);

    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=mfajarna_resume.pdf`);
    fileStream.pipe(res);
}