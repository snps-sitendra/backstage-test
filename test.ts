const authMiddleware: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
        const xApiToken = req.headers['x-api-key'] as string | undefined;
        const frontsideAccount = req.headers['frontside-account'] as
        | string
        | undefined;
        if (xApiToken && frontsideAccount) {
          const tokenValidateRes = (await frontsideServiceHelper.validateApiKey(
            harnessAccount,
            xApiToken,
          )) as any | null;
          ...
        }
        next();
  } catch (error) {
      res.status(401).send('Unauthorized');
  }
};
return authMiddleware;
